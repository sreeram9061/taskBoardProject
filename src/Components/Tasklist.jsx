import { useContext } from "react"
import {PassignSetData} from '../App' 


function Tasklist({tasks,items ,categories}){

     const setData = useContext(PassignSetData)

     /* task handle function */
     const handlTasks=(id,tasks,category)=>{
            let updatedTasck
            /* delete completed  */
            category=='completed' && (updatedTasck=tasks.filter(items=> items.id!=id ))

            /* chage category */
            categories.map((cate,i)=>{
                if(cate==category && category!=categories[categories.length-1]){
                    tasks.map(ite=>{
                        if(ite.id==id){
                            ite.category=categories[i+1]
                        }
                    })
                    updatedTasck=tasks 
                }
                        
            })    
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
        {tasks.map(({category,id,task})=>{  
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