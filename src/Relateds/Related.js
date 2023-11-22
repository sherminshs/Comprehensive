import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Related = () => {

    const[data,setdata]=useState([]);
    const GetData=async ()=>{
       
        const Response=await axios.get('https://localhost:7008/api/Relateds');
        setdata(Response.data);
    }

    useEffect(
        ()=>{GetData()},[]
    )

    return (
        <div>
          
          <h1>Show Relateds</h1>
          
          {data.map((item,i)=>(
            <div> key={i} {item.relatedId}</div>
          ))}
        </div>
      );
    }
  

export default Related
