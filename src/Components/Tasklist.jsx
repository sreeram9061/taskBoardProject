import { useContext } from "react"
import {PassingSetData} from '../App' 


function Tasklist({items }){
     const [setData,{categories, tasks}] = useContext(PassingSetData)

     
     /* task handle function */
     const handlTasks=(clickedTaskId,category)=>{
            let updatedTasck
            /* delete completed  */
            category=='completed' && (updatedTasck=tasks.filter(items=> items.id!=clickedTaskId ))

            /* chage category */
            category!='completed' &&(
            updatedTasck=tasks.map((itemTask)=>{
                if(itemTask.id==clickedTaskId ){
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
                          <button onClick={()=>{handlTasks(id ,category )}}
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