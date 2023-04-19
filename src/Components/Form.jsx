import { useEffect, useState } from "react"


function Form({setData}){
    let [inputVal,setInputVal]=useState()
    let [status,setClickStatus]=useState()

    /* handle function */
    const handleValue=()=>{
        inputVal &&
        /* setter function */
        setData(({categories,tasks})=>{
            return {
                categories:categories,
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
        setClickStatus('clicked')
    }

    useEffect(()=>{
        document.querySelector('.taskInput').value=''
        console.log('redered')
    },[status])

    return(
        <div id="taskForm">
            <h3>Add New Task</h3>
            <div className="formField">
                <input onChange={(newTask)=>setInputVal(newTask.target.value)} type="text" className="taskInput"   />
                <button onClick={handleValue} className="taskSubmit">Submit</button>
            </div>
        </div>
    )
}
export default Form