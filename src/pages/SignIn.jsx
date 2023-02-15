import React from "react";
import Header from "../components/Header/Header.jsx";


export default function Signin () {


   return (
     <>
        <Header/>
        <input name="Email" placeholder="Email"/>
        <input name="Password" placeholder="Password"/>
        <button type="submit"> Login </button>

        <button><a href="/to-do-list-app">To do List</a></button>
        <button>Calendario</button>
     </>
   )

}