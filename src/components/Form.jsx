import React, { useState } from "react";


export default function Form ({addTask}) {
    const [text,setText] = useState(null);
    const [id , setId] = useState(0);
    
    const textHandler = (e) => {
        const target = e.target;
        setText(target.value);
    };

    const createTask = (text) => {
        let taskObj = {text:text , id:id}
        setId(id + 1);
        addTask(taskObj);
     };

    return (
    <>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'10px'}}>
         <input style={{width:'25%'}} placeholder="Tarefa" onChange={textHandler}/>
         <button onClick={() => createTask(text)}>Adicionar</button>
        </div>
        
    </>
    )
}