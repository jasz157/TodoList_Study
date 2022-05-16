import React from "react";
import "./list.css"

export default function List() {



  return (
    <>

      <header>
        <nav>
          <div className="container" style={{ backgroundColor: "blueviolet" }}>
            <span className="image" >
              <img alt="logo" style={{ mixBlendMode: "color-burn" }} src="https://icon-library.com/images/todo-icon/todo-icon-17.jpg" width="50px" height="50px" />
            </span>
            <span className="option_item">
                 <a href="/">Sair</a>
                 <button>Criar Tarefa</button>
            </span>

            
          </div>
        </nav>
      </header>
       
       <main className="content">

        <h1>Suas Terefas</h1>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>

       </main>
      

    </>


  )


}