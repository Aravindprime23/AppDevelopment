import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/home' element={<home/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
