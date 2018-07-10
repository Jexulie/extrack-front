import axios from 'axios';

export const loginInfo = response => ({
    type: 'LOGIN',
    response
});

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

export const authFailed = () => ({
    type: 'AUTH_FAILED'
});
