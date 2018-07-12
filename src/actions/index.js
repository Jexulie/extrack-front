import axios from 'axios';

/* Auth and Login */

const loginInfo = response => ({
    type: 'LOGIN',
    response
});

const fetchInfo = response => ({
    type: 'FETCH_INFO',
    response
});

export const apiCall = userInfo => {
    return dispatch => {
        return axios.post('http://localhost:3001/user/fetch', {
            fullName:userInfo.name,
            email:userInfo.email,
            avatarUrl:userInfo.picture.data.url,
            facebookID: userInfo.id.toString()
        })
            .then(r => {
                if(r.data.success === true){
                    dispatch(loginInfo(userInfo))
                    dispatch(fetchInfo(r.data.user))
                }else{
                    dispatch(apiCallMsg('Connection Error...'));
                    dispatch(showInfo());
                    setTimeout(() => dispatch(hideInfo(),5000));
                }
            })
            .catch(e => {
                dispatch(apiCallMsg('Connection Error...'));
                dispatch(showInfo());
                setTimeout(() => dispatch(hideInfo(),5000));
            });
    }
}

/* Save Changes to DB */

export const saveExpense = expense => {
    return dispatch => {
        return axios.post('http://localhost:3001/user/add', {
            expense
        })
            .then(r => {
                if(r.data.success === true){
                    dispatch(apiCallMsg('Data Saved!'));
                    dispatch(showInfo());
                    setTimeout(() => dispatch(hideInfo(),3000));
                }else{
                    dispatch(apiCallMsg('Connection Error...'));
                    dispatch(showInfo());
                    setTimeout(() => dispatch(hideInfo(),5000));
                }                
            })
            .catch(e => {
                dispatch(apiCallMsg('Connection Error...'));
                dispatch(showInfo());
                setTimeout(() => dispatch(hideInfo(),3000));
            })
    }
}

/* Page Changes */

export const changeMain = changeTo => ({
    type: 'CHANGE_MAIN',
    changeTo
});

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startLoading = () => ({
    type: 'START_LOADING'
});

export const calcTotal = () => ({
    type: 'CALC_TOTAL'
});



/* Messages */

export const showInfo = () => ({
    type: 'SHOW_INFO'
});

export const hideInfo = () => ({
    type: 'HIDE_INFO'
});

export const authFailed = msg => ({
    type: 'AUTH_FAILED',
    msg
});

export const expenseAddMsg = msg => ({
    type: 'EXPENSE_ADD_MSG',
    msg
});

export const apiCallMsg = msg => ({
    type: 'API_CALL_MSG',
    msg
});