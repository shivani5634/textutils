import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFom from './components/TextFom';

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextFom heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
  
    </>
  );
}

export default App;
