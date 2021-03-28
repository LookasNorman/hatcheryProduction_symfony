import {HERD_ERROR, HERD_RECEIVED, HERD_REQUEST, HERD_UNLOAD} from "../action/constans";

const herd = (state = {
    herd: null, isFetching: false
}, action) => {
    switch (action.type) {
        case HERD_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case HERD_RECEIVED:
            return {
                ...state,
                herd: action.data,
                isFetching: false
            }
        case HERD_ERROR:
            return {
                ...state,
                isFetching: false,
                herd: null
            }
        case HERD_UNLOAD:
            return {
                ...state,
                isFetching: false,
                herd: null
            }
        default:
            return state;
    }
}

export default herd;