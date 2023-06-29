import { useEffect, useState } from 'react';
import './style.css';
import { TODOItem } from './TODOItem/TODOItem';


export function Exercise() {
  const [data,setData]= useState([]);
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function logJSONData() {

    //miejsce prze wyslaniem zapytania o dane 

    const response = await fetch("http://localhost:3333/api/todo");
    const jsonData = await response.json();

    //miejsce gdzie dane juz otrzymalismy
    

    if(response.status === 500){
      setIsError(true)
      
    } else{
      setIsError(false);
      
    }
    setData(jsonData);
    setIsLoading(false);
  }
  useEffect(()=>{
    logJSONData();
  },[]);
  
  return (
  
  <div className='wrapper'> 
  {isError && (<div><h1>ERROR!</h1><button onClick={logJSONData}>Ponów próbę</button></div>) }
  {isLoading && (<h1>Ładowanie...</h1>)}
  {!isError && data.map((toDoElement)=>(
    <TODOItem 
      key={toDoElement.id}
      id={toDoElement.id}
      title={toDoElement.title}
      createdAt={toDoElement.createdAt}
      author={toDoElement.author}
      isDone={toDoElement.isDone}
      note={toDoElement.note}
      doneDate={toDoElement.doneDate}
    />
  ))} </div>
  );
}
