import { MALE } from '../utils/Constants'

const updateFieldType = "UPDATE_TEXT_FIELD_TYPE";

const initialState = {
    name: null,
    age: null,
    height: null,
    weight: null,
    gender: MALE
}

export function updateFieldActionCreator(event) {
    return {
        type: updateFieldType,
        payload: {
            [event.target.name]: event.target.value
        }
    }
}


export const reducer = (state = initialState, action) => {
    if (action.type === updateFieldType) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}