import axios from 'axios';

export const loginInfo = response => ({
    type: 'LOGIN',
    fullname: response.name,
    email: response.email,
    avatar: response.picture.data.url,
    islogged: true
});

export const changeMain = changeTo => ({
    type: 'CHANGE_MAIN',
    changeTo
});

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});