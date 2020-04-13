import axios from 'axios';

const selectDayType = "SELECT_DAY_TYPE";
const deleteMealType = "DELETE_MEAL_TYPE";

const initialState = {
    selectedDay: 'monday',
    days: {
        monday: [
            {
                mealName: 'monday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'monday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        tuesday: [
            {
                mealName: 'tuesday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'tuesday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        wednesday: [
            {
                mealName: 'wednesday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'wednesday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        thursday: [
            {
                mealName: 'thursday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'thursday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        friday: [
            {
                mealName: 'friday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'friday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        saturday: [
            {
                mealName: 'saturday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'saturday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ],
        sunday: [
            {
                mealName: 'sunday1',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            },
            {
                mealName: 'sunday2',
                foods: [
                    {
                        foodName: 'Banana',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protien: 20,
                        fat: 40
                    }
                ]
            }
        ]
    }
};

export function selectDayActionCreator(day) {
    return {
        type: selectDayType,
        payload: {
            selectedDay: day
        }
    }
}

export function deleteMealActionCreator(day, index) {
    return (dispatch, getState) => {
        let mealPlan = getState().mealPlan
        mealPlan.days[day].splice(index, 1);
        dispatch({
            type: deleteMealType,
            payload: {
                ...mealPlan
            }
        });
    }
}

export const reducer = (state = initialState, action) => {
    if (action.type === selectDayType) {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === deleteMealType) {
        return {
            ...state,
            ...action.payload
        }
    }


    return state;
}