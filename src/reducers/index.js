import { combineReducers } from 'redux';
import users from './users';
import polls from './polls';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';


export default combineReducers({
    users,
    polls,
    authedUser,
    loadingBar: loadingBarReducer,
});