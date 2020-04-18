import axios from 'axios';

const selectDayType = "SELECT_DAY_TYPE";
const deleteMealType = "DELETE_MEAL_TYPE";
const updateMealName = "UPDATE_MEAL_NAME";
const addFoodType = "ADD_FOOD_TYPE";
const addMealType = "ADD_MEAL_TYPE";
const deleteFoodType = "DELETE_FOOD_TYPE";

const initialState = {
    selectedDay: 'monday',
    days: {
        monday: [
            {
                mealName: 'monday1',
                dateCreated: 'Fri Jun 22 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'monday2',
                dateCreated: 'Fri Jun 23 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'monday2',
                dateCreated: 'Fri Jun 24 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        tuesday: [
            {
                mealName: 'tuesday1',
                dateCreated: 'Fri Jun 25 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'tuesday2',
                dateCreated: 'Fri Jun 26 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        wednesday: [
            {
                mealName: 'wednesday1',
                dateCreated: 'Fri Jun 27 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'wednesday2',
                dateCreated: 'Fri Jun 28 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        thursday: [
            {
                mealName: 'thursday1',
                dateCreated: 'Fri Jun 29 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'thursday2',
                dateCreated: 'Fri Jun 30 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        friday: [
            {
                mealName: 'friday1',
                dateCreated: 'Fri Jun 31 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'friday2',
                dateCreated: 'Fri Jun 31 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        saturday: [
            {
                mealName: 'saturday1',
                dateCreated: 'Fri Jun 32 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'saturday2',
                dateCreated: 'Fri Jun 33 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            }
        ],
        sunday: [
            {
                mealName: 'sunday1',
                dateCreated: 'Fri Jun 34 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    }
                ]
            },
            {
                mealName: 'sunday2',
                dateCreated: 'Fri Jun 35 2018 10:54:33 GMT+0530',
                foods: [
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
                    },
                    {
                        foodName: "pineapple",
                        serving: "0.5 cup, chunks",
                        calorie: 41.25,
                        carb: 10.82,
                        protein: 0.45,
                        fat: 0.1,
                        photo: "https://d2xdmhkmkbyw75.cloudfront.net/195_thumb.jpg"
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
                fat: resultFood.nf_total_fat,
                photo: resultFood.photo.thumb,
                dateCreated: Date.now().toString()
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

export function addMealActionCreator(day) {
    return {
        type: addMealType,
        day: day
    }
}

export function updateMealNameActionCreator(day, index, event) {
    return (dispatch, getState) => {
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
    return {
        type: deleteMealType,
        day: day,
        index: index
    }
}

export function deleteFoodActionCreator(day, mealIndex, foodIndex) {
    console.log("day: " + day + " mealIndex: " + mealIndex + " foodINdex: " + foodIndex);
    return {
        type: deleteFoodType,
        day: day,
        mealIndex: mealIndex,
        foodIndex: foodIndex
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
        let newMeals = state.days[action.day].map((meal) => (meal));
        newMeals.splice(action.index, 1);
        return {
            ...state,
            days: {
                ...state.days,
                [action.day]: [
                    ...newMeals
                ]
            }
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
    else if (action.type === deleteFoodType) {
        let newMeals = state.days[action.day].map((meal) => (meal));
        newMeals[action.mealIndex].foods.splice(action.foodIndex, 1);
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
    else if (action.type === addMealType) {
        let newMeals = state.days[action.day].map((meal) => (meal));
        newMeals.push({
            mealName: 'New Meal',
            dateCreated: Date.now().toString(),
            foods: []
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