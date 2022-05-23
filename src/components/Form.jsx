import React, { useState } from "react";


export default function Form ({taskHandler}) {
    const [text,setText] = useState(null);
    const [id , setId] = useState(0);
    
    const textHandler = (e) => {
        const target = e.target;
        setText(target.value);
    };

    const createTask = (text) => {
        let taskObj = {text:text , id:id}
        setId(id + 1);
        taskHandler(taskObj);
     };

    return (
    <>
     
         <input placeholder="Task" onChange={textHandler}/>
         <button onClick={() => createTask(text)}>Add</button>
    </>
    )
}