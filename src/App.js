
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import Librarylist  from "./Components/Librarylist"
import AddSongs from "./Components/AddSongs"
import UpdateSong from "./Components/UpdateSong"
import Home from "./Components/Home"
import Blog from "./Components/Blog"
import About from "./Components/About"
import Login from "./Components/Login"
import Register from "./Components/Register"

import {Routes,Route} from 'react-router-dom'
import {AuthContext, AuthProvider } from "./context/AuthContext";


function App(){
  return(
    <AuthProvider>
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Librarylist/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/addsongs" element={<AddSongs/>}/>

        <Route path="/updatesong/:id" element={<UpdateSong/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>

      </Routes>
    <Footer/> 
    </>
    </AuthProvider>
  )
}

export default App;