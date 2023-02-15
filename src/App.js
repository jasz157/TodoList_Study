import './App.css';
import TodoList from './pages/TodoList';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import LoginHomePage from './pages/LoginHomePage/LoginHomePage';
import Calendar from './pages/Calendar';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LoginHomePage/>}/>
        <Route path='/to-do-list-app' element={<TodoList/>}/>
        <Route path='/calendar-app' element={<Calendar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
