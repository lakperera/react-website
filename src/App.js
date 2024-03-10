import {Header} from "./Components/Header";
import Notification from "./Components/Notification";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import PopUp from "./Components/PopUp";
import './App.css';
import React,{useEffect, useState} from "react";
import axios from 'axios';


function App() {
  const [results, setResults] = useState([]);
  const[backendData , setBackendData] = useState([]);

  // useEffect(() =>{

  //   axios.get('/api/data')
  //   .then((response) =>{
  //     setBackendData(response.data.message);
  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });
  // },[]);

  
   useEffect(()=>{
    fetch("/api/data").then((response) => {
      console.log('API Response:', response); // Log the entire response object
      if (response.data && response.data.message) {
        setBackendData(response.data.message);
      } else {
        console.error('Response data or message not found:', response);
      }
    }).catch((error) =>{
      console.error(error);
    })
   })
  return (
    
    <div>
      
      {/* <PopUp/> */}
      {/* <Notification/> */}
      <Header setResults={setResults} result={results}/>
      <p> Message from the backend: {backendData}</p>
      {/* <Main/> */}
      {/* <Footer/> */}
    </div>  
    
    
  ); 
  
}
export default App;
