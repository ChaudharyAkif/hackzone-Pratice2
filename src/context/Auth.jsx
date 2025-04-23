import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import { auth, db } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const Auth = createContext()
const initialState = { isAuth: false, user: {} }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGGEN_IN":
            return { isAuth: true, user: payload.user }
        case "SET_LOGGEN_OUT":
            return initialState
        case "SET_PROFILE":
            return { ...state, user: payload.user }
        default: return state
    }

}
const fetchDate =async(user)=>{
try{
    const docRef = doc(db, "user", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const user = docSnap.data
      dispatch({type:"SET_LOGGED_IN" , payload:{user}})
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
}
catch(e){
console.log(e)
}

}
const AuthContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getData = useCallback(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                fetchDate(user)
            } 
            // else {
            //     // window.MessageAlert("Log out Success", "success")
            // }
        });
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <Auth.Provider value={{ ...state, dispatch }}>
            {children}
        </Auth.Provider>
    )   
}

export const useAuthContext = () => useContext(Auth)
export default AuthContext
