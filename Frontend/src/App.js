import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Womenallproducts from './components/women/Womenallproducts';
import Highendcouture from './components/women/Highendcouture';
import Sarees from './components/women/Sarees';
import Lehenga from './components/women/Lehenga';
import Dresses from './components/women/Dresses';
import Twinningoutfits from './components/women/Twinningoutfits';

import Kidsallproducts from './components/kids/kidsallproducts';
import Girl from './components/kids/Girl';
import Boy from './components/kids/Boy';

import Jewelryallcollection from './components/jewelry/Jewelryallcollection';
import Collection from './components/jewelry/Collection';

import Booksallcollection from './components/books/Booksallcollection';
import Bookscollection from './components/books/Bookscollection';

import Login from './components/login';
import Register from './components/register';
import Addproducts from './components/Addproducts';





function App() {
  return (
    <>
       <BrowserRouter basename='punarvi_shopping'>
        <Routes>

          {/* Login routes */}
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path='addproduct' element={<Addproducts/>}></Route>

          {/* Women components routes */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="women" element={<Womenallproducts/>}></Route>
          <Route path="highendcouture" element={<Highendcouture/>}></Route>
          <Route path="sarees" element={<Sarees/>}></Route>
          <Route path="lehanga" element={<Lehenga/>}></Route>
          <Route path="dresses" element={<Dresses/>}></Route>
          <Route path="twinningoutfits" element={<Twinningoutfits/>}></Route>

          {/* Kids components routes */}
          <Route path="kids" element={<Kidsallproducts/>}></Route>
          <Route path="girl" element={<Girl/>}></Route>
          <Route path="boy" element={<Boy/>}></Route>

           {/* Jewelery components routes */}
           <Route path="jewelry" element={<Jewelryallcollection/>}></Route>
           <Route path="jewelrycollection" element={<Collection/>}></Route>

            {/* Books components routes */}
           <Route path="books" element={<Booksallcollection/>}></Route>
            <Route path="bookscollection" element={<Bookscollection/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
