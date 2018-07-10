const initalState = {
    isLoading: false,
    isLogged: true,
    isLoggingFailed: false,
    curMain: 'addexpense',
    profile: {
        createdAt: null,
        fullName: null,
        email: null,
        avatarUrl: null,
        expenses: []
    },
    error: null    
};

const reducer = (state=initalState, action) => {
    switch(action.type){
        case 'LOGGED':
            return{
                ...state,
                profile: {
                    fullName:action.fullname,
                    email:action.email,
                    avatarUrl:action.avatar,
                    isLogged:action.islogged
                }
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