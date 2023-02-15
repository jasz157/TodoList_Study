import React from "react";


export default function TaskItem({ task, deleteTask }) {

    return (
        <>
            <input type='checkbox' style={{ justifyContent: 'center', display: 'flex', marginTop:'2px'}} />
            <div style={{fontSize:'20px', marginTop:'5px'}}>{task.text}</div>
            <button  onClick={() => deleteTask(task.id)}>Apagar tarefa </button>
        </>
    )
}