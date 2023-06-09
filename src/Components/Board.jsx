import Tasklist from "./Tasklist"
import { useContext } from "react"
import { AppData } from "../context/Appcontext"

function Board(){
    let {categories} =useContext(AppData)
    return(
          <>
           <div id="taskBoard">
               {categories.map((items)=>{
                    return(
                        <div className="taskColumn">
                                <div className="columnHeader">
                                    <h3>{items}</h3>
                                </div>
                           <div className="taskItems">
                              < Tasklist items={items} />  
                           </div>
                        </div>
                    )
                })
               } 
           </div>
           <div className="footer">React based Task Board App.</div>
        </>
    )
}

export default Board