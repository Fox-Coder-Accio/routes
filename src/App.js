import React, {useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Navbar from "./Pages/Navbar";

import "./style.css"

import {Routes, Route} from "react-router-dom";

const App = () => {
  
  const [count, setCount] = useState(0);

  return(
    <div>
        <Navbar />
        
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about"  element={<About  count={count}/>} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/blog"  element={<Blog  count={count} setCount={setCount}/>} />
        </Routes>
    </div>
  )
}

export default App;