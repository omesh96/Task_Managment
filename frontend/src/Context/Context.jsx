
 import React from 'react'
 import { useReducer } from 'react'
 import { createContext } from "react"
import reducer from './reducer'

import { LOGIN ,MODAL } from './action'
 
 const allPageAuth={
    isLogin:true,
    isModal:false
 }

 export const AuthContext=createContext()

 const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,allPageAuth)
   return (
    <AuthContext.Provider value={{state,dispatch,LOGIN,MODAL}}>
{children}
    </AuthContext.Provider>
   )
 }
 
 export default AuthContextProvider