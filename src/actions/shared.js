import { getInitialData } from '../utils/api';
import { receivePolls } from '../actions/polls';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'sarah_edo';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}