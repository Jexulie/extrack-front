const initalState = {
    isLoading: false,
    isLogged: true,
    isLoggingFailed: false,
    curMain: 'addexpense', // this year default
    currency: '$',
    profile: {
        createdAt: null,
        id: null,
        fullName: null,
        email: null,
        avatarUrl: null,
        messageWarn: false,
        expenses: [
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:6716816756389833,month:"July",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:6716846756389833,month:"February",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:6716826756389833,month:"October",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:671645326756389833,month:"May",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:6716826756389833,month:"September",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:671682634534556389833,month:"June",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:6716826756323423833,month:"June",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:671682675632229833,month:"June",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:67168267511119833,month:"July",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:671682675638343833,month:"July",name:"brazil",year:2018}
        ],
        filterThisYear: [
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"2/13/2018, 11:05:16 AM",id:67168267563859833,month:"July",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"3/13/2018, 11:05:16 AM",id:67168269756389833,month:"March",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"1/13/2018, 11:05:16 AM",id:18334434343333331,month:"February",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:6722168267563891833,month:"April",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"2/13/2018, 11:05:16 AM",id:67221116826756389833,month:"January",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"2/13/2018, 11:05:16 AM",id:67221116826756389833,month:"March",name:"brazil",year:2018}
        ],
        filterThisMonth: [
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/11/2018, 11:05:16 AM",id:67168126756389833,month:"July",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/8/2018, 11:05:16 AM",id:67168267563859833,month:"July",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/20/2018, 11:05:16 AM",id:67168269756389833,month:"June",name:"brazil",year:2018},
        ],
        filterLastYear: [
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:67168267564389833,month:"July",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:67168276756389833,month:"February",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:68716826756389833,month:"October",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:67168266756389833,month:"May",name:"brazil",year:2017},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2017, 11:05:16 AM",id:67168267569389833,month:"September",name:"brazil",year:2017}
        ],
        filterLastMonth: [
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:67168267563891833,month:"June",name:"brazil",year:2018},
            {category:"coffee",cost:100,day:13,day_name:"Friday",fullDate:"7/13/2018, 11:05:16 AM",id:671116826756389833,month:"June",name:"brazil",year:2018}
        ]
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
