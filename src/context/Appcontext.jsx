import { createContext, useReducer } from "react"
import { initialValue, reducer } from "../reducer/reducerData"
export const AppData=createContext()
export const AppDispath=createContext()

export const Appcontext=({children})=>{
    const [state,dispath]=useReducer(reducer,initialValue)
    return(
        <AppData.Provider value={state}>
            <AppDispath.Provider value={dispath}>
            {children}
            </AppDispath.Provider>
        </AppData.Provider>
    )
}