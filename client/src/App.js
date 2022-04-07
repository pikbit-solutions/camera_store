import './App.css';
import './assets/styles/AdminPage/AdminMain.scss'
import Homepage from './components/HomePage/home'
import Product from './components/productDatailPage/productMain'
import Storepage from "./components/StorePage/storepage";
import Gallery from "./components/GalleryPage/GalleryMain";
import UpdateProduct from "./components/AdminPanel/AddRemove/UpdateProduct";
// import ComingSoon from "./components/ComingSoonPage/ComingSoon"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminMain from './components/AdminPanel/AdminMain';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getProducts } from './redux/actions/productActions.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/store" exact element={<Storepage />} />
          <Route path='/store/product/:id' element={<Product />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route exact path='/admin' element={<AdminMain />} />
          <Route path='admin/edit/:id' element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
