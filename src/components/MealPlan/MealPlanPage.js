import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import MealPlanItem from './MealPlanItem';
import {
    selectDayActionCreator,
    deleteMealActionCreator,
    addMealActionCreator
} from '../../store/MealPlanReducer';

function MealPlanPage({ selectDayActionCreator, dayNames, dayMealPlans, selectedDay, deleteMealActionCreator, addMealActionCreator, history }) {
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
            class="flex flex-col h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}>

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

            <div class="flex flex-wrap overflow-auto overflow-x-hidden">
                <AnimatePresence exitBeforeEnter>
                    {
                        dayMealPlans[selectedDay].map(({ mealName, foods }, index) => {
                            return (
                                <motion.div
                                    class="h-72 w-6/12 p-5"
                                    key={selectedDay + mealName + index}
                                    initial={{ x: getInitialPosition() }}
                                    animate={{ x: 0 }}
                                    exit={{ x: getExitPosition() }}
                                    transition={{ ease: "easeInOut" }}>
                                    <MealPlanItem
                                        mealName={mealName}
                                        foods={foods}
                                        index={index}
                                        selectedDay={selectedDay}
                                        deleteMealActionCreator={deleteMealActionCreator} />
                                </motion.div>
                            );
                        })
                    }
                    <motion.div
                        class="h-72 w-6/12 p-5"
                        key={'/edit/' + selectedDay + '/' + dayMealPlans[selectedDay].length}
                        initial={{ x: getInitialPosition() }}
                        animate={{ x: 0 }}
                        exit={{ x: getExitPosition() }}
                        transition={{ ease: "easeInOut" }}>
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
                    </motion.div>
                </AnimatePresence>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlanPage));