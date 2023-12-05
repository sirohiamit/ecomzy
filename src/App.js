import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Loader from './components/Spinner/Loader';

function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
