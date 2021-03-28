import {BREEDER_ERROR, BREEDER_RECEIVED, BREEDER_REQUEST, BREEDER_UNLOAD} from "../action/constans";

const breeder = (state = {
    breeder: null, isFetching: false
}, action) => {
    switch (action.type) {
        case BREEDER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case BREEDER_RECEIVED:
            return {
                ...state,
                breeder: action.data,
                isFetching: false
            }
        case BREEDER_ERROR:
            return {
                ...state,
                isFetching: false,
                breeder: null
            }
        case BREEDER_UNLOAD:
            return {
                ...state,
                isFetching: false,
                breeder: null
            }
        default:
            return state;
    }
}

export default breeder;