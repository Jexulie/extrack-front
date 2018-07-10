//isLogged: false
const initalState = {
    isLoading: true,
    isLogged: false,
    isLoggingFailed: false,
    error: null,
    createdAt: null,
    fullName: null,
    email: null,
    avatarUrl: null,
    expenses: []
};

const reducer = (state=initalState, action) => {
    switch(action.type){
        case 'LOGGED':
            return{
                ...state,
                fullName:action.fullname,
                email:action.email,
                avatarUrl:action.avatar,
                isLogged:action.islogged
            }
        case 'LOGOUT':
            return{

            }
        case 'LOADING':
            return{

            }
        case 'CANCEL_LOADING':
            return{

            }
        case 'ADD_EXPENSE':
            return{
                
            }
        default:
            return state
    }
}

export default reducer;