import {ADD_INPUTS, INPUTS_LIST_ERROR, INPUTS_LIST_RECEIVED, INPUTS_LIST_REQUEST} from "../action/constans";

const eggsInputsList = (state = {
    eggsInputs: null, isFetching: false
}, action) => {
    switch (action.type) {
        case INPUTS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case INPUTS_LIST_RECEIVED:
            return {
                ...state,
                eggsInputs: action.payload['hydra:member'],
                isFetching: false
            }
        case INPUTS_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                eggsInputs: null
            }
        case ADD_INPUTS:
            return {
                ...state,
                eggsInputs: state.eggsInputs ? state.eggsInputs.concat(action.payload) : state.eggsInputs
            }
        default:
            return state;
    }
}

export default eggsInputsList;