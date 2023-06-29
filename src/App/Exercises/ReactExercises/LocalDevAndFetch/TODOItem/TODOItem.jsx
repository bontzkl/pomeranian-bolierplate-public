import { useEffect, useState } from 'react';
import './TODOItem.css';


export const TODOItem = ({id, title, createdAt, author, isDone, note, doneDate}) =>{
    
    const parseDate = (date) =>{
        const dateObj = new Date(date);
        return dateObj.toDateString();
    }
   
    return(
        <div className={`to-do-element${isDone? ' done': ''}`}>
            <h3 className='title'>{title}</h3>
            <div className='created'>Created by {author} at {parseDate(createdAt)}</div>
            <div>{note}</div>
        </div>
    )
}