import { useState } from "react"

function App() {
const [colour,setColor]=useState("purple")
  return (
    <div className="w-full h-screen " style={{backgroundColor: colour}}>
      <div className=" m-1 p-6 gap-6 bg-white">
        <button className="gap-5 bg-blue-600" onClick={()=>setColor("blue")}>blue</button>
        <button className="gap-5 bg-red-600" onClick={()=>setColor("red")}>red</button>
        <button className="gap-5 bg-green-600" onClick={()=>setColor("green")}>green</button>
        <button className="gap-5 bg-violet-600" onClick={()=>setColor("violet")}>violet</button>
        <button className="gap-5 bg-cyan-600" onClick={()=>setColor("cyan")}>cyan</button>
        <button className="gap-5 bg-black " style={{color:"white"}} onClick={()=>setColor("black")}>black</button>
      </div>
    </div>
  )
}

export default App
