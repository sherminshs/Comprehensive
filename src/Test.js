import axios from 'axios';
import React, { useEffect,  useState } from 'react'

const Test =()=>{
    const [data,setdata]=useState([]);
    console.log("a");
    const fetchData = async () => {
      try {
        const response=await axios.get("https://localhost:7008/WeatherForecast");
        setdata(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
   useEffect(()=>{
    fetchData();
   },[]);
  


  return (
    <div>
      
      <h1>Show weather forecasting</h1>
      
      {data.map((item,i)=>(
        <div> key={i} {item.summary}</div>
      ))}
    </div>
  );
}

export default Test;
