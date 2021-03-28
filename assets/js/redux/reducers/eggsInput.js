import {
    INPUTS_ERROR,
    INPUTS_RECEIVED,
    INPUTS_REQUEST,
    INPUTS_UNLOAD
} from "../action/constans";

const eggsInput = (state = {
    eggsInput: null, isFetching: false
}, action) => {
    switch (action.type) {
        case INPUTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case INPUTS_RECEIVED:
            return {
                ...state,
                eggsInput: action.data,
                isFetching: false
            }
        case INPUTS_ERROR:
            return {
                ...state,
                isFetching: false,
                eggsInput: null
            }
        case INPUTS_UNLOAD:
            return {
                ...state,
                isFetching: false,
                eggsInput: null
            }
        default:
            return state;
    }
}

export default eggsInput;