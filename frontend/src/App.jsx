// import React from 'react'

// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"
import Home from  "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/PostDetails"
import { UserContextProvider} from "./context/UserContext"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <UserContextProvider> 
      
      <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/write" element={<CreatePost/>}/>
     <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
     <Route exact path="/edit/:id" element={<EditPost/>}/>
     <Route exact path="/profile/:id" element={<Profile/>}/>
   </Routes>
      
   </UserContextProvider>
      
    
  )
} 
;

export default App
