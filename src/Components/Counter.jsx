import { useReducer } from "react"

function reducer(State,action){
    switch(action.type)
    {
       case 'increament':{
            if(State.Count<99){
            return {
                Count:State.Count+2
            }
            }
            return {
            ...State
        }
       }
      case 'decreament':{
            if(State.Count>1){
            return {
                Count:State.Count-2
            }
            }
            return {
            ...State
        }
       }
       case 'reset':{
            return {
                Count:0
            }
       }
       default:{
        return {
            ...State
        }
       }
    }
}
export function Counter(){
    const [State,dispatch]=useReducer(reducer,{
        Count:0
    })
    return (
        <>
        <h1>Count : {State.Count}</h1>
        <button onClick={()=>{
            dispatch({
                type:"increament"
            })
        }}>Increament</button>
        <button onClick={()=>{
            dispatch({
                type:"decreament"
            })
        }}>Decreament</button>
        <button onClick={()=>{
            dispatch({
                type:"reset"
            })
        }}>Reset</button>
        
        </>
    )
}