import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Soko Garden</h1>
        </header>

      <Link to={'/'} className='nav-links'>Get Products Page</Link>
      <Link to={'/Addproducts'} className='nav-links'>Add Products Page</Link>
      <Link to={'/Signin'} className='nav-links'>Sign In Page</Link>
      <Link to={'/Signup'} className='nav-links'>Sign Up Page</Link>

        {/* Below are our different routes together with our rendered components */}
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/Addproducts' element={<Addproducts />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
