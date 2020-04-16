
const updateTextFieldType = "UPDATE_TEXT_FIELD_TYPE";

const initialState = {
    name: null,
    age: null,
    height: null,
    weight: null,
    gender: 'male'
}

export function updateTextFieldActionCreator(event) {
    return {
        type: updateTextFieldActionCreator,
        payload: {
            [event.target.name]: event.target.value
        }
    }
}


export const reducer = (state = initialState, action) => {
    if (action.type === updateTextFieldActionCreator) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}