import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert'
import React , {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


import './App.css';

function App() {
const[mode, setmode] = useState('light')
const[alert, setAlert] = useState(null)
const showAlert = (message, type) => {
setAlert({
  msg: message,
  type: type
})
setTimeout(() => [setAlert(null)], 1500)
}


const removebgcolorclass =() => {
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
}

const togglemode =(cls) => {
  removebgcolorclass();
  console.log(cls)
  document.body.classList.add('bg-' + cls)
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = 'black'
    showAlert("Dark mode has been enabled", "success")
   
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled", "success")
  }
}
  return (
  <>
  <Router>
    <Navbar title = "TextAction" mode={mode} togglemode={togglemode}/>
   
    <Alert alert= {alert}/>
    <div className="container my-3">
    <Switch>
      {/* /user --> 1 /user/homes --> 2 react uses partial matching so use exact keyword */}
          <Route exact path="/about"> 
            <About />
          </Route>
        
          <Route path="/">
          <Textform heading = "Analyze your Text here!!" mode={mode} alert={showAlert}/>
            
          </Route>
        </Switch></div>
        </Router>
   
  </>
  
  );
}

export default App;
