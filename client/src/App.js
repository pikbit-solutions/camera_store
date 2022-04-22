import './App.css';
import './assets/styles/AdminPage/AdminMain.scss'
import Homepage from './components/HomePage/home'
import Product from './components/productDatailPage/productMain'
import Storepage from "./components/StorePage/storepage";
import Gallery from "./components/GalleryPage/GalleryMain";
import AdminLogin from "./components/AdminPanel/AdminLogin/LoginPage"
import UpdateProduct from "./components/AdminPanel/AddRemove/UpdateProduct";
// import ComingSoon from "./components/ComingSoonPage/ComingSoon"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminMain from './components/AdminPanel/AdminMain';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getProducts } from './redux/actions/productActions.js';
import { AuthProvider, useAuth } from './contexts/AuthContext.js'
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/store" exact element={<Storepage />} />
            <Route path='/store/product/:id' element={<Product />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='admin/edit/:id' element={<UpdateProduct />} />
            <Route path='/login' element={<AdminLogin />} />
            <Route path='/admin' element={
            <PrivateRoute path='/login'>
              <AdminMain />
            </PrivateRoute>
          }/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
