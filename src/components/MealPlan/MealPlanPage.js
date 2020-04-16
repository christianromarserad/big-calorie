import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MealPlanItem from './MealPlanItem';
import {
    selectDayActionCreator,
    deleteMealActionCreator,
    addMealActionCreator
} from '../../store/MealPlanReducer';

function MealPlanPage({ selectDayActionCreator, dayNames, dayMealPlans, selectedDay, deleteMealActionCreator, addMealActionCreator, history }) {
    return (
        <div class="flex flex-col h-full">
            <div class="flex justify-center">
                {
                    dayNames.map((day) => {
                        return (
                            day === selectedDay ?
                                <button class="bg-teal-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full m-3" onClick={selectDayActionCreator.bind(this, day)}> {day}</button> :
                                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full m-3" onClick={selectDayActionCreator.bind(this, day)}> {day}</button>
                        )
                    })
                }
            </div>

            <div class="flex flex-wrap overflow-auto">
                {
                    dayMealPlans[selectedDay].map(({ mealName, foods }, index) => {
                        return (
                            <div class="h-72 w-6/12 p-5">
                                <MealPlanItem
                                    mealName={mealName}
                                    foods={foods}
                                    index={index}
                                    selectedDay={selectedDay}
                                    deleteMealActionCreator={deleteMealActionCreator} />
                            </div>
                        );
                    })
                }

                <div class="h-72 w-6/12 p-5">
                    <button
                        class="bg-white rounded-lg shadow-lg w-full h-full flex flex-1 text-teal-400 hover:text-teal-700 justify-center"
                        onClick={() => { addMealActionCreator(selectedDay); history.push('/edit/' + selectedDay + '/' + dayMealPlans[selectedDay].length); }}>
                        <svg
                            class="h-24 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        dayNames: Object.keys(state.mealPlan.days),
        selectedDay: state.mealPlan.selectedDay,
        dayMealPlans: state.mealPlan.days
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectDayActionCreator: selectDayActionCreator,
        deleteMealActionCreator: deleteMealActionCreator,
        addMealActionCreator: addMealActionCreator
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlanPage));