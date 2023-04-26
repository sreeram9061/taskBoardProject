import { useContext } from "react"
import { AppData } from "../context/Appcontext"
import { AppDispath } from "../context/Appcontext"
import { handleTaskCategory } from "../Functions/handleTasks"

function Tasklist({items }){
     const {categories, tasks} = useContext(AppData)
     const dispath = useContext(AppDispath)

     
    return(
        <>
        {tasks.map(({id,category,task})=>{  
                return(
                    category==items &&(
                      <div className="taskItem">
                          <p>{task}</p>
                          <button onClick={()=>{handleTaskCategory(id ,category,categories,tasks,dispath )}}
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