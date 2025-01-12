import { Outlet } from "react-router-dom"
import Footer from "./component/footer/footer"
import Header from "./component/header/header"
function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
