

export const handleTaskCategory=(clickedTaskId,category,categories,tasks,dispath)=>{

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
    dispath({
        type:'CATEGORY_UPDATES',
        payload:updatedTasck
    })
}