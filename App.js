import React from "react";
import Home from './Home.js';
import About from './About.js';
import  Contact from './Contact.js';
import  Page from './page.js';
import Gallery from './gallery.js';
import'./App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App(){
  return(
  
    <div>
    <Router>
    <div className="grid">
    <div className="head">
        <h1>Sweety (Anushka)</h1>
    </div>
    <ul className="nav">
      <li><Link to='/home'>Home</Link></li> 
      <li><Link to='/about'>About</Link></li> 
      <li><Link to='/contact'>Contact</Link></li> 
      <li><Link to='/page'>Page</Link></li> 
      <li><Link to='/gallery'>Gallery</Link></li> 
    </ul>
    </div>
   <div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/page" element={<Page/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
     </Routes>
    </div>
    </Router>
    </div>
  )
}
export default App;
