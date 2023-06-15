import { useEffect, useState } from 'react';
import './style.css';

export function Exercise() {
  const [data,setData]= useState([]);
  async function logJSONData() {
    const response = await fetch("http://localhost:3333/api/todo");
    const jsonData = await response.json();
    setData(jsonData);
  }
  useEffect(()=>{
    logJSONData();
  },[]);
  
  return (
  <>{data.map((item)=>(<div>{item.title}</div>))}</>
  );
}
