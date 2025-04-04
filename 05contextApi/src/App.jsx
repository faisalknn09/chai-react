import './App.css'
import Login from './assets/component/login'
import UserContextProvider from './assets/context/ContextProvider'
 import Profile from './assets/component/profile'
function App() {


  return (
    <UserContextProvider>
     <h1>hello wordl</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
