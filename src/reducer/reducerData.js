import { data } from "../data";
export const initialValue={
    ...data
}
export const reducer=({categories, tasks},{type,payload})=>{
    switch(type){
        case 'SET_NEW_VALUE':
            return {
                categories,
                tasks:[...tasks,
                    {
                        id: tasks.length!=0 ?(tasks[(tasks.length-1)].id)+1 : 2500,
                        category:categories[0],
                        task:payload
                    }
                ]
            }
        case 'CATEGORY_UPDATES':
            return {
                categories,
                tasks:[...payload]
            }
        default :
        return state    
    }
}