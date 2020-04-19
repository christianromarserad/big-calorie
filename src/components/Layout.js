import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"
import MealPlanItemList from './MealPlan/MealPlanItemList';
import UserSideBar from './User/UserSideBar';
import {
    selectDayActionCreator,
    deleteMealActionCreator,
    addMealActionCreator
} from '../store/MealPlanReducer';

function Layout({ selectDayActionCreator, dayNames, dayMealPlans, selectedDay, deleteMealActionCreator, addMealActionCreator }) {
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
            class="flex h-full relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>

            <div class="hidden smtablet:block w-64">
                <UserSideBar />
            </div>

            <div class="flex-1 flex flex-col h-full overflow-hidden relative">
                <div class="flex justify-center tablet:inline-flex hidden">
                    <motion.button
                        class="text-xs uppercase font-bold text-gray-600 hover:bg-teal-300 py-2 px-4 rounded-lg m-2 smtablet:hidden"
                        onClick={setNextDay.bind("user")}>
                        hahha
                    </motion.button>

                    {
                        dayNames.map((day) => {
                            return (
                                day === selectedDay ?
                                    <motion.button
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        key={selectedDay}
                                        class="text-xs uppercase font-bold bg-teal-700 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-2"
                                        onClick={setNextDay.bind(this, day)}>
                                        {day}
                                    </motion.button> :
                                    <motion.button
                                        class="text-xs uppercase font-bold text-gray-600 hover:bg-teal-300 py-2 px-4 rounded-lg m-2"
                                        onClick={setNextDay.bind(this, day)}
                                        whileHover={{ scale: 1.06 }}>
                                        {day}
                                    </motion.button>
                            )
                        })
                    }
                </div>

                <div class="flex-1 overflow-auto overflow-x-hidden">
                    <AnimatePresence exitBeforeEnter>
                        {
                            dayNames.indexOf(selectedDay) != -1 ?
                                <motion.div
                                    key={selectedDay}
                                    initial={{ x: getInitialPosition() }}
                                    animate={{ x: 0 }}
                                    exit={{ x: getExitPosition() }}
                                    transition={{ ease: "easeInOut" }}>
                                    <MealPlanItemList
                                        meals={dayMealPlans[selectedDay]}
                                        selectedDay={selectedDay}
                                        deleteMealActionCreator={deleteMealActionCreator}
                                        addMealActionCreator={addMealActionCreator} />
                                </motion.div> :
                                <motion.div
                                    class="h-full"
                                    initial={{ x: getInitialPosition() }}
                                    animate={{ x: 0 }}
                                    exit={{ x: getExitPosition() }}
                                    transition={{ ease: "easeInOut" }}>
                                    <UserSideBar />
                                </motion.div>
                        }
                    </AnimatePresence>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);