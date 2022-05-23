import React from "react";
import "./Header.css"

export default function Header() {

  return (

    <>

      <header>
        <nav>
          <div className="container" style={{ backgroundColor: "blueviolet" }}>
            <span className="image" >
              <img alt="logo" style={{ mixBlendMode: "color-burn" }} src="https://icon-library.com/images/todo-icon/todo-icon-17.jpg" width="50px" height="50px" />
            </span>
            <span style={{ width: "10%", color: "white" }}>
              <h3>Jonnie Amaral</h3>
            </span>
            <span className="option_item">
              <a href="/">Sair</a>
            </span>


          </div>
        </nav>
      </header>

      <h1>Suas Terefas:</h1>



    </>


  )


}