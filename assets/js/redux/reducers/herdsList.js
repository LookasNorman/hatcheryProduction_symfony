import {ADD_HERD, HERDS_LIST_ERROR, HERDS_LIST_RECEIVED, HERDS_LIST_REQUEST} from "../action/constans";

const herdsList = (state = {
    herds: null, isFetching: false
}, action) => {
    switch (action.type) {
        case HERDS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case HERDS_LIST_RECEIVED:
            return {
                ...state,
                herds: action.payload['hydra:member'],
                isFetching: false
            }
        case HERDS_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                herds: null
            }
        case ADD_HERD:
            return {
                ...state,
                herds: state.herds ? state.herds.concat(action.payload) : state.herds
            };
        default:
            return state;
    }
}

export default herdsList;