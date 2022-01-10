import { LOGIN } from '../action/user';

export default userReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN:
            return action.tc;
        default:
            return state;
    }
}

