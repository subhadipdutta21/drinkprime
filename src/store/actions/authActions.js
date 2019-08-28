export const signIn = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        console.log(creds)
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.username,
            creds.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_FAIL', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(()=>{
            dispatch({type : 'SIGNOUT_SUCCESS'})
        })
    }
}