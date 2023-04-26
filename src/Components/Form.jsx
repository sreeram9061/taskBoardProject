import { useState,useContext } from "react"
import { AppDispath } from "../context/Appcontext"
function Form(){

    let [inputVal,setInputVal]=useState("")
    const dispath = useContext(AppDispath)

    /* handle function */
    const handleValue=()=>{

        inputVal &&
        dispath({
            type:'SET_NEW_VALUE',
            payload:inputVal
        })
        setInputVal('')
    }

    return(
        <div id="taskForm">
            <h3>Add New Task</h3>
            <div className="formField">
                <input value={inputVal} onChange={(newTask)=>setInputVal(newTask.target.value)} type="text" className="taskInput"   />
                <button onClick={handleValue} className="taskSubmit">Submit</button>
            </div>
        </div>
    )
}
export default Form