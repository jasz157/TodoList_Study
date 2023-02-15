import './App.css';
import TodoList from './pages/TodoList';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Signin from './pages/SignIn';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Signin/>} ></Route>
        <Route path='/to-do-list-app' element={<TodoList/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
