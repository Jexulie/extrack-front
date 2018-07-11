const initalState = {
    isLoading: false,
    isLogged: true,
    isLoggingFailed: false,
    curMain: 'addexpense', // this year default
    profile: {
        createdAt: null,
        fullName: null,
        email: null,
        avatarUrl: null,
        messageWarn: false,
        expenses: []
    },
    error: null
};


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const reducer = (state=initalState, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                isLoading: false,
                isLogged: true,
                profile: {
                    createdAt: new Date().toLocaleString(),
                    fullName:action.response.name,
                    email:action.response.email,
                    avatarUrl:action.response.picture.data.url,
                    expenses: []
                }
            }
        case 'LOGOUT':
            return{

            }
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
        case 'AUTH_FAILED':
            return{
                ...state,
                isLoading: false,
                isLogged: false,
                error: 'Auth Failed'
            }
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
                            cost:action.expense.cost,
                            category: action.expense.category,
                            fullDate: new Date().toLocaleString(),
                            year: new Date().getFullYear(),
                            month: new Date().getMonth(),
                            day: new Date().getDate(),
                            day_name: dayNames[new Date().getDay()],
                        }
                    ]
                }
            }
        case 'CHANGE_MAIN':
            return{
                ...state,
                curMain: action.changeTo
            }
        default:
            return state
    }
}

export default reducer;
