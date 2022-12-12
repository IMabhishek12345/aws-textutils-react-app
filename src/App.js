import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// let name="Abhishek";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
     msg: message,
     type:type
    })
   setTimeout(()=>{
   setAlert(null)
   
   },1000)
  }
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");  
      document.body.style.backgroundColor="#084298";
      showAlert("Dark mode has been enabled","success");
      // setInterval(()=>{
      //   document.title="TextUtils is amazing";
      //  },2000); 
      //  setInterval(()=>{
      //   document.title="Install App";
      //  },1500)
     
  
    }else{
      setMode("light");  
      document.body.style.backgroundColor="#f8f9fa";
      showAlert("light mode has been enabled","success");
    }
  
  }
  
      
    
  return (
     <>
    <Router> 
    <Navbar title="textUtils"  about="About textUtils" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
     <Route exact path="/about" element={<About mode={mode}/>} />  
    
     <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />     
    
      
     {/* <TextForm /> */}
     {/* <About /> */}
     </Routes> 
    </div>
    </Router>
    </>
      
  )
}
    
    

export default App;
