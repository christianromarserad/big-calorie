const incrementCountType = "INCREMENT_COUNT_TYPE";

const initialState = {
    count: 1
};

export function incrementCountActionCreator() {
    return {
        type: incrementCountType
    }
}

export const reducer = (state = initialState, action) => {
    if (action.type === incrementCountType) {
        return {
            ...state,
            count: state.count + 1
        }
    }

    return state;
}