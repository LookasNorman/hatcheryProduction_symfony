import {USER_LOGIN_SUCCESS} from "../action/constans";

const auth = (state = {
    token: null,
    userId: null
}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: 1
            }
        default:
            return state;
    }
}

export default auth
