import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import { Provider } from 'react-redux';
import store from './redux/store';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/faq';
import Fruits from './pages/Fruits';
import Cart from './pages/Cart';
import Dairy from './pages/Dairy';
import Vegetables from './pages/Vegetables';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';


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
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/fruits' element={<Fruits/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/dairy' element={<Dairy/>}/>
          <Route path='/vegetables' element={<Vegetables/>}/>
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
