import { useState } from "react"

//chota sa button hai jo UI change krta h.
//hooks use krke hi UI change hoga.

function Faisal() {
    let [din,setCounter]=useState(1)
    const addValue=() => {
        if(din>19){
            setCounter(din)
        }
        else
        setCounter(din+1)
    }
    const removeValue=() => {
        if(din==0){
            setCounter(din)
        }
        else
        setCounter(din -1)
    }
    return(
        <>
    <p>react padhne ka aaj {din}</p>
    <button onClick={addValue}>add value</button>
    <button onClick={removeValue}>decrease value</button>
    </>
)
}
export default Faisal