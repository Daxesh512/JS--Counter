import React from 'react'
import CounterHooks from './CounterHooks'

function App() {
    console.log("Render App")
    return ( 
        <>
        CounterHooks
        <CounterHooks initialCount={0}/>
        </>

    )
}



export default App;