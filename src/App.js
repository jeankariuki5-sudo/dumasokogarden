import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Makepayment from './components/Makepayment';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Soko Garden</h1>
        </header>

        <nav>

          <Link to="/" className='btn btn-primary btn-sm m-1'> Home</Link>
          <Link to="/Addproducts" className='btn btn-success btn-sm m-1' >Add products</Link>
          <Link to="/Signin" className='btn btn-danger btn-sm m-1' >Signin</Link>
          <Link to="/Signup" className='btn btn-info btn-sm m-1' >Signup</Link>
        </nav>
        {/* Below are our different routes together with our rendered components */}
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/Addproducts' element={<Addproducts />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
