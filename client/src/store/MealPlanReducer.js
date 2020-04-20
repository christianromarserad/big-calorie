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
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        tuesday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        wednesday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        thursday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        friday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        saturday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ],
        sunday: [
            {
                mealName: 'Breakfast',
                dateCreated: 'today',
                foods: []
            }
        ]
    }
};

export function addFoodActionCreator(day, index, foodName) {
    return (dispatch, getState) => {
        axios.get('/api/getFood/' + foodName).then((res) => {
            let food = {
                ...res.data,
                dateCreated: Date.now().toString()
            };

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