import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import MealPlanItemList from './MealPlanItemList';
import {
    selectDayActionCreator,
    deleteMealActionCreator,
    addMealActionCreator
} from '../../store/MealPlanReducer';

function MealPlanPage({ selectDayActionCreator, dayNames, dayMealPlans, selectedDay, deleteMealActionCreator, addMealActionCreator }) {
    let [nextDay, setNextDay] = useState(null);
    let [isRightDirection, setIsRightDirection] = useState(true);

    useEffect(() => {
        if (nextDay != null) {
            selectDayActionCreator(nextDay);
        }
    }, [isRightDirection]);

    useEffect(() => {
        let nextIndex = dayNames.indexOf(nextDay);
        let currentIndex = dayNames.indexOf(selectedDay);

        if (nextIndex == -1) {
            return;
        }

        if (nextIndex > currentIndex) {
            if (isRightDirection) {
                selectDayActionCreator(nextDay);
            }
            else {
                setIsRightDirection(true);
            }
        }
        else {
            if (isRightDirection) {
                setIsRightDirection(false);
            }
            else {
                selectDayActionCreator(nextDay);
            }
        }
    }, [nextDay]);


    const getExitPosition = () => {
        return isRightDirection ? '-200%' : '200%';
    }

    const getInitialPosition = () => {
        return isRightDirection ? '200%' : '-200%'
    }


    return (
        <motion.div
            class="flex flex-col h-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>

            <div class="flex justify-center">
                {
                    dayNames.map((day) => {
                        return (
                            day === selectedDay ?
                                <button
                                    class="text-xs uppercase font-bold bg-teal-700 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-3"
                                    onClick={setNextDay.bind(this, day)}>
                                    {day}
                                </button> :
                                <button
                                    class="text-xs uppercase font-bold text-gray-600 hover:bg-teal-300 py-2 px-4 rounded-lg m-3"
                                    onClick={setNextDay.bind(this, day)}>
                                    {day}
                                </button>
                        )
                    })
                }
            </div>

            <AnimatePresence exitBeforeEnter>
                <MealPlanItemList
                    key={selectedDay}
                    meals={dayMealPlans[selectedDay]}
                    selectedDay={selectedDay}
                    deleteMealActionCreator={deleteMealActionCreator}
                    addMealActionCreator={addMealActionCreator}
                    initialPosition={getInitialPosition()}
                    exitPosition={getExitPosition()} />
            </AnimatePresence>
        </motion.div >
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

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanPage);