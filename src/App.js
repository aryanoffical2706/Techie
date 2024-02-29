import React from 'react'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Service from './components/Service.jsx'
import "./style/App.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/service.scss"
import "./style/mediaQuery.scss"

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/service' element={<Service/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App