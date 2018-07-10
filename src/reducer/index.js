//isLogged: false
const initalState = {
    isLoading: false,
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
        default:
            return state
    }
}

export default reducer;