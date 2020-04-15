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
                                <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={selectDayActionCreator.bind(this, day)}> {day}</button> :
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={selectDayActionCreator.bind(this, day)}> {day}</button>
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
                        class="bg-white rounded-lg shadow-lg w-full h-full flex-1 flex flex-col"
                        onClick={() => { addMealActionCreator(selectedDay); history.push('/edit/' + selectedDay + '/' + dayMealPlans[selectedDay].length); }}>
                        Create A new Meal
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