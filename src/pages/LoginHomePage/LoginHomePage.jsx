import React from "react";
import Header from "../../components/Header/Header.jsx";
import './LoginHomePage.css'


export default function LoginHomePage() {


   return (
      <>
         <Header />
         <input name="Email" placeholder="Email" />
         <input name="Password" placeholder="Password" />
         <button type="submit"> Login </button>

         <a href="to-do-list-app">
            <img alt="To-do-List" src="https://icon-library.com/images/todo-icon/todo-icon-17.jpg" width="50px" height="50px" />
         </a>
         
         <a href="calendar-app">
            <img alt="Calendar" width="50px" height="50px" src="https://w7.pngwing.com/pngs/26/38/png-transparent-calendar-planner-illustration-calendar-date-computer-icons-google-calendar-iconfinder-icon-symbol-calendar-miscellaneous-text-calendar-thumbnail.png"/>
         </a>
      </>
   )

}