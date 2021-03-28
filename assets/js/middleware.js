import {USER_LOGIN_SUCCESS} from "./redux/action/constans";
import {request} from './agent';

export const tokenMiddleware = store => next => action => {
    switch (action.type){
        case USER_LOGIN_SUCCESS:
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('userId', action.userId);
            request.setToken(action.token);
            break;
        default:
    }

    next(action);
}