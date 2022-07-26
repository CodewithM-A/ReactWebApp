import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'


 function App() {
  const [mode , setMode] = useState('light');
const togglemode =()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#0D3A89';
    document.title= "TextCounter - DarkMode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.title= "TextCounter - LightMode";
  }
}
  
  return (
    <>
      {/* <div className='container my-3'> */}
      
   <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        
        <Routes>
          <Route exact path="/textform" element={<TextForm heading="Enter The Text to analyze" mode={mode}/>} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About/>} />
        </Routes>
      
      </BrowserRouter>
        
      {/* </div> */}
    </>
  );
}

export default App;
