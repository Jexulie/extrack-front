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

export const authFailed = msg => ({
    type: 'AUTH_FAILED',
    msg
});

export const expenseAddMsg = msg => ({
    type: 'EXPENSE_ADD_MSG',
    msg
})

export const calcTotal = () => ({
    type: 'CALC_TOTAL'
});

export const showInfo = () => ({
    type: 'SHOW_INFO'
});

export const hideInfo = () => ({
    type: 'HIDE_INFO'
})
