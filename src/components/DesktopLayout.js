import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"
import MealPlanItemList from './MealPlan/MealPlanItemList';
import UserSideBar from './User/UserSideBar';
import Navbar from './Navbar';
import {
    selectDayActionCreator,
    deleteMealActionCreator,
    addMealActionCreator
} from '../store/MealPlanReducer';

function DesktopLayout({ selectDayActionCreator, dayNames, dayMealPlans, selectedDay, deleteMealActionCreator, addMealActionCreator }) {
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
        <div class="flex h-full relative w-full">

            <div class="w-64">
                <UserSideBar />
            </div>

            <div class="flex-1 flex flex-col h-full overflow-hidden relative">
                <Navbar
                    navOptionsArray={dayNames.map((dayName) => ({
                        name: dayName,
                        isSelected: dayName === selectedDay,
                        onClick: setNextDay.bind(this, dayName)
                    }))} />

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

export default connect(mapStateToProps, mapDispatchToProps)(DesktopLayout);