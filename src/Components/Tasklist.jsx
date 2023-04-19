import { useContext } from "react"
import {PassignSetData} from '../App' 


function Tasklist({tasks,items ,categories}){
     const [setData,] = useContext(PassignSetData)

     
     /* task handle function */
     const handlTasks=(clickedTaskTd,tasks,category)=>{
            let updatedTasck
            /* delete completed  */
            category=='completed' && (updatedTasck=tasks.filter(items=> items.id!=clickedTaskTd ))

            /* chage category */
            category!='completed' &&(
            updatedTasck=tasks.map((itemTask)=>{
                if(itemTask.id==clickedTaskTd ){
                    itemTask.category= categories[categories.indexOf(itemTask.category)+1]
                    return itemTask
                }else{
                    return itemTask
                }
            }))

            /* setter function */
            setData(({categories})=>{
                return{
                    categories:categories,
                    tasks:[
                    ...updatedTasck,
                    ]
                }
            })
    }


    return(
        <>
        {tasks.map(({id,category,task})=>{  
                return(
                    category==items &&(
                      <div className="taskItem">
                          <p>{task}</p>
                          <button onClick={()=>{handlTasks(id,tasks ,category )}}
                           className={items=='completed' ? 'taskButton delete' : 'taskButton move'}>{
                            items==`completed` ? `Delete` : `Move`}</button>
                      </div>
                  
                    )  
                )
            })
        }
       </>
    )
}
export default Tasklist