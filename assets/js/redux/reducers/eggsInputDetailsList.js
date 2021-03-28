import {ADD_INPUT_DETAILS} from "../action/constans";

const eggsInputDetailList = (state = {
    eggsInputDetails: null, isFetching: false
}, action) => {
    switch (action.type) {
        case ADD_INPUT_DETAILS:
            return {
                ...state,
                eggsInputDetails: state.eggsInputDetails ? state.eggsInputDetails.concat(action.payload) : state.eggsInputDetails
            }
        default:
            return state;
    }
}

export default eggsInputDetailList;