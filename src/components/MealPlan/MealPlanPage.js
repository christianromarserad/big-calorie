import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MealPlanItem from './MealPlanItem';
import {
    selectDayActionCreator,
    deleteMealActionCreator
} from '../../store/MealPlanReducer';

function MealPlanPage(props) {
    return (
        <div>
            <div class="flex justify-center">
                {
                    props.dayNames.map((day) => {
                        return (
                            day === props.selectedDay ?
                                <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={props.selectDayActionCreator.bind(this, day)}> {day}</button> :
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={props.selectDayActionCreator.bind(this, day)}> {day}</button>
                        )
                    })
                }
            </div>

            <div class="flex">
                {
                    props.dayMealPlans[props.selectedDay].map(({ mealName, foods }, index) => {
                        return <MealPlanItem
                            mealName={mealName}
                            foods={foods}
                            index={index}
                            selectedDay={props.selectedDay}
                            deleteMealActionCreator={props.deleteMealActionCreator} />
                    })
                }
            </div>
        </div >
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
        deleteMealActionCreator: deleteMealActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanPage);