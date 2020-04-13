import axios from 'axios';

const selectDayType = "SELECT_DAY_TYPE";

const initialState = {
    selectedDay: 'monday',
    days: {
        monday: [
            {
                mealName: 'monday1',
                food: [

                ]
            },
            {
                mealName: 'monday2',
                food: [

                ]
            }
        ],
        tuesday: [
            {
                mealName: 'tuesday1',
                food: [

                ]
            },
            {
                mealName: 'tuesday2',
                food: [

                ]
            }
        ],
        wednesday: [
            {
                mealName: 'wednesday1',
                food: [

                ]
            },
            {
                mealName: 'wednesday2',
                food: [

                ]
            }
        ],
        thursday: [
            {
                mealName: 'thursday1',
                food: [

                ]
            },
            {
                mealName: 'thursday2',
                food: [

                ]
            }
        ],
        friday: [
            {
                mealName: 'friday1',
                food: [

                ]
            },
            {
                mealName: 'friday2',
                food: [

                ]
            }
        ],
        saturday: [
            {
                mealName: 'saturday1',
                food: [

                ]
            },
            {
                mealName: 'saturday2',
                food: [

                ]
            }
        ],
        sunday: [
            {
                mealName: 'sunday1',
                food: [

                ]
            },
            {
                mealName: 'sunday2',
                food: [

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

export const reducer = (state = initialState, action) => {
    if (action.type === selectDayType) {
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
}