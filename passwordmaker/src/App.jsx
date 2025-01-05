import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(() => {
    let pass=""
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(number) str+="123456789"
    if(character) str+="!@#$%^&*()+-*/<>[]{}"
    for (let index = 1; index <=length; index++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    } 

    setPassword(pass)
  },[length,number,character,setPassword])

  const copyPasswordToClipboard=useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,number,character,setPassword])
  
  return (
    <>
    <h1 id='footer'>Password Generator</h1>
    <div className='checkbox w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400 space-x-3'>
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input type="text"
        value={password} 
        className='outline-none w-full py-1 px-3 cursor-text'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none text-white px-3 py-2 shrink-0 bg-green-600'
        onClick={() => passwordGenerator()}>change</button>
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none text-white px-3 py-2 shrink-0 bg-blue-600'>copy</button>
        
      </div>

    <input type="range" className='m-3 align-middle size-500  '
    min={6}
    max={30}
    onChange={(e) => {
        setLength(e.target.value)
    }}
    />

    <label> length: {length} </label>
    <input type="checkbox" 
      defaultChecked={number}
      id='numberInput'
      onChange={() => {
        setNumber((prev)=> !prev);
    }}/> number

    <input type="checkbox"
     defaultChecked={character}
      id='characterInput'
      onChange={() => {
        setCharacter((prev)=> !prev);
       }} /> character

    </div>
    </>
  )
}

export default App
