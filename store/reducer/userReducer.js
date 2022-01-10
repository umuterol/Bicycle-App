import { LOGIN } from '../action/user';

export default userReducer = (state="106558926462", action) => {
    switch (action.type) {
        case LOGIN:
            return action.tc;
        default:
            return state;
    }
}

