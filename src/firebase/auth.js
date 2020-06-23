import {authentication} from './config'
//register user
export const registerUser = async (email, password) => {
    try {
        return (await authentication.createUserWithEmailAndPassword(email, password)).user
    } catch (error) {
        return error
    }
}

//login user
export const loginUser = async (email, password) => {
    try {
        return (await authentication.signInWithEmailAndPassword(email, password)).user
    } catch (error) {
        console.error(error)
    }
}

//sign out user
export const signOutUser = async () => {
    try {
        return await authentication.signOut()
    } catch (error) {
        console.error(error)
    }
}

//get user profile

//update user profile

