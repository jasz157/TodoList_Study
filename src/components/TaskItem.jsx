import React from "react";


export default  function TaskItem ({task , deleteTask}) {

    return(
    <>
            <input type='checkbox'/>
                {task.text}
            <button onClick={() => deleteTask(task.id)}>Apagar tarefa </button>
    </>
    )
}