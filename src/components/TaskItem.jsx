import React from "react";


export default  function TaskItem ({task}) {

    return(
    <>
            <input type='checkbox'/>
                {task.text}
            <button>Apagar tarefa </button>
    </>
    )
}