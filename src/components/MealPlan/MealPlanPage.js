import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDayActionCreator } from '../../store/MealPlanReducer';

function MealPlanPage(props) {
    return (
        <div>
            {
                props.dayNames.map((day) => {
                    return (
                        day === props.selectedDay ?
                            <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={props.selectDayActionCreator.bind(this, day)}> {day}</button> :
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={props.selectDayActionCreator.bind(this, day)}> {day}</button>
                    )
                })
            }

            <div>
                {
                    props.dayMealPlans[props.selectedDay].map(({ mealName, food }) => {
                        return <div>{mealName} <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded m-2">EDIT</button></div>
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
        selectDayActionCreator: selectDayActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanPage);