import axios from 'axios';

const selectDayType = "SELECT_DAY_TYPE";
const deleteMealType = "DELETE_MEAL_TYPE";
const updateMealName = "UPDATE_MEAL_NAME";
const addFoodType = "ADD_FOOD_TYPE";

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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
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
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Orange',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    },
                    {
                        foodName: 'Apple',
                        calorie: 200,
                        carb: 100,
                        protein: 20,
                        fat: 40
                    }
                ]
            }
        ]
    }
};

export function addFoodActionCreator(day, index, foodName) {
    return (dispatch, getState) => {
        axios.post('/v2/natural/nutrients', {
            query: foodName,
            timezone: "US/Eastern"
        }).then((res) => {
            let resultFood = res.data.foods[0];
            let food = {
                foodName: resultFood.food_name,
                serving: resultFood.serving_qty + " " + resultFood.serving_unit,
                calorie: resultFood.nf_calories,
                carb: resultFood.nf_total_carbohydrate,
                protein: resultFood.nf_protein,
                fat: resultFood.nf_total_fat
            }

            dispatch({
                type: addFoodType,
                day: day,
                index: index,
                payload: {
                    food: food
                }
            });
        })
    };
}

export function updateMealNameActionCreator(day, index, event) {
    return (dispatch, getState) => {
        let mealPlan = getState().mealPlan;
        let mealName = event.target.value

        dispatch({
            type: updateMealName,
            day: day,
            index: index,
            payload: {
                mealName: mealName
            }
        });
    };
}

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
    else if (action.type === updateMealName) {
        let newMeals = state.days[action.day].map((meal, index) => {
            if (index == action.index) {
                return {
                    ...meal,
                    ...action.payload
                }
            }
            else {
                return meal;
            }
        });

        return {
            ...state,
            days: {
                ...state.days,
                [action.day]: [
                    ...newMeals
                ]
            }
        };
    }
    else if (action.type === addFoodType) {
        let newMeals = state.days[action.day].map((meal, index) => {
            if (index == action.index) {
                return {
                    ...meal,
                    foods: [
                        ...meal.foods,
                        action.payload.food
                    ]
                }
            }
            else {
                return meal;
            }
        });

        return {
            ...state,
            days: {
                ...state.days,
                [action.day]: [
                    ...newMeals
                ]
            }
        };
    }


    return state;
}