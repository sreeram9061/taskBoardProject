import { useEffect } from "react"

function Form({setData}){

    const handleValue=()=>{
        let inputVal=document.querySelector('.taskInput').value
        inputVal &&
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
    }

    useEffect(()=>{
        document.querySelector('.taskInput').value=''
    })

    return(
        <div id="taskForm">
            <h3>Add New Task</h3>
            <div className="formField">
                <input type="text" className="taskInput" />
                <button onClick={handleValue} className="taskSubmit">Submit</button>
            </div>
        </div>
    )
}
export default Form