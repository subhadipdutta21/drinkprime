const initState = {
    authError : null
}

const authReducer = (state=initState,action) => {
    switch(action.type) {
        case 'LOGIN_FAIL':
                console.log('failed')
            return {
                ...state,
                authError:'Login failed'
            }
        case 'LOGIN_SUCCESS':            
                console.log('success')
                return {
                    ...state,
                    authError:null
                }
        case 'SIGNOUT_SUCCESS':
                console.log('signed out')
                return state
        default:
            return state;    
    }
}

export default authReducer