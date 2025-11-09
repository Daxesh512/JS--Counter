import React,{useState} from 'react'


//in this level we need some jsx code so lets do it
//lets get the prop from App
//next step is using State to make this happen
//now we need some events for these buttons lets do it

export default function CounterHooks({initialCount}){
    const[count,setCount]=useState(initialCount)
    console.log('Render CounterHooks now')
    return(
<div>
	<button onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
	<span>{count}</span>
	<button onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
</div>
    )
}