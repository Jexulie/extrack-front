const initalState = {
    isLoading: false,
    isLogged: false,
    isLoggingFailed: false,
    curMain: 'addexpense', // this year default
    profile: {
        createdAt: null,
        id: null,
        fullName: null,
        email: null,
        avatarUrl: null,
        messageWarn: false,
        expenses: [],
        filterThisYear: [],
        filterThisMonth: [],
        filterLastYear: [],
        filterLastMonth: []
    },
    info: null,
    message: null
};

// TODO: Filter by category

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const reducer = (state=initalState, action) => {
    switch(action.type){
        /* Authentication */        
        case 'LOGIN':
            return{
                ...state,
                profile: {
                    id: action.response.id,
                    fullName:action.response.name,
                    email:action.response.email,
                    avatarUrl:action.response.picture.data.url
                }
            }
        case 'LOGOUT':
            return{

            }
        /* Get Info From Server */ 
        case 'FETCH_INFO':
        console.log(action.response)
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                profile: {
                    ...state.profile,
                    expenses: action.response.expenses === undefined ? [] : action.response.expenses,
                    filterThisYear: action.response.filterThisYear  === undefined ? [] : action.response.filterThisYear,
                    filterThisMonth: action.response.filterThisMonth  === undefined ? [] : action.response.filterThisMonth,
                    filterLastYear: action.response.filterLastYear  === undefined ? [] : action.response.filterLastYear,
                    filterLastMonth: action.response.filterLastMonth  === undefined ? [] : action.response.filterLastMonth
                }

            }
        /* Loading */
        case 'START_LOADING':
            return{
                ...state,
                isLoading: true
            }
        case 'CANCEL_LOADING':
            return{
                ...state,
                isLoading: false
            }
        /* Expenses */
        case 'ADD_EXPENSE':
            return{
                ...state,
                profile: {
                    ...state.profile,
                    expenses: [
                        ...state.profile.expenses, 
                        {
                            id: Math.floor(Math.random() * 1e16),
                            name: action.expense.name,
                            cost: action.expense.cost,
                            category: action.expense.category,
                            fullDate: new Date().toLocaleString(),
                            year: new Date().getFullYear(),
                            month: monthNames[new Date().getMonth()],
                            day: new Date().getDate(),
                            day_name: dayNames[new Date().getDay()],
                        }
                    ]
                }
            }
        case 'CALC_TOTAL':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    filterThisYear : state.profile.expenses.filter(e => {
                        if(e.year === new Date().getFullYear()){
                            return e;
                        }
                    }),
                    filterThisMonth : state.profile.expenses.filter(e => {
                        if(e.month === monthNames[new Date().getMonth()]){
                            return e;
                        }
                    }),
                    filterLastYear : state.profile.expenses.filter(e => {
                        if(e.year === new Date().getFullYear() - 1){
                            return e;
                        }
                    }),
                    filterLastMonth : state.profile.expenses.filter(e => {
                        if(e.month === monthNames[new Date().getMonth() - 1]){
                            return e;
                        }
                    })
                }
            }
        /* Changing Main Page */
        case 'CHANGE_MAIN':
            return{
                ...state,
                curMain: action.changeTo
            }
        /* Info */
        case 'SHOW_INFO':
            return {
                ...state,
                info: true
            }
        case 'HIDE_INFO':
            return {
                ...state,
                info: false
            }
        /* Info Messages */
        case 'AUTH_FAILED':
            return{
                ...state,
                isLoading: false,
                isLogged: false,
                message: action.msg
            }
        case 'EXPENSE_ADD_MSG':
            return{
                ...state,
                message: action.msg
            }
        case 'API_CALL_MSG':
            return {
                ...state,
                message: action.msg
            }
        default:
            return state
    }
}

export default reducer;
