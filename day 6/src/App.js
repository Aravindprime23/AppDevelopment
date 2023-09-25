import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import { Provider } from 'react-redux';
import store from './redux/store';
import Privacy from './pages/Privacy';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
       <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
       </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
