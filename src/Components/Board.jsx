import Tasklist from "./Tasklist"

function Board({dataList:{categories,tasks}}){
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
                          < Tasklist tasks={tasks} items={items} categories={categories} />  
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