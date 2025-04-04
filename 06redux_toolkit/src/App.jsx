import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {

  return (
    <>
    <h1 className='text-3xl text-center font-bold mt-8'>Todo App</h1>
    <p className='text-center text-gray-400 mt-2'>Using Redux Toolkit</p>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
