import { useState,useContext } from "react"
import {PassingSetData} from '../App' 


function Form(){
    let [inputVal,setInputVal]=useState()
    const [setData,] = useContext(PassingSetData)

    /* handle function */
    const handleValue=()=>{
        inputVal &&
        /* setter function */
        setData(({categories,tasks})=>{
            return {
                categories,
                tasks:[
                    ...tasks,
                    {
                        id: tasks.length!=0 ?(tasks[(tasks.length-1)].id)+1 : 2500,
                        category: categories[0],
                        task:inputVal
                    }
                ]
            }
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