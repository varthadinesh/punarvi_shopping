import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Query } from 'react-apollo';
import DATA_QUERY from './components/Data/dataindex';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Highendcouture from './components/women/Highendcouture';
import Sarees from './components/women/Sarees';
import Lehenga from './components/women/Lehenga';
import Dresses from './components/women/Dresses';
import Twinningoutfits from './components/women/Twinningoutfits';

import Girl from './components/kids/Girl';
import Boy from './components/kids/Boy';

import Collection from './components/jewelry/Collection';

import Bookscollection from './components/books/Bookscollection';

function App() {

  return (
    <Query query={DATA_QUERY}>
     {
     ({ loading, error, data }) => {
      
        if (loading) return <div>Fetching Data.....</div>
        if (error)   return <div>Error Fetching Data</div>

        var items;

        for(let i in data.assets){
          if(data.assets[i].id === "clsbse8tr3ozz0apk8wbeiqfh"){
            items = data.assets[i];
          }
        }

        console.log(items)
        return (
          <BrowserRouter basename='punarvi_shopping'>
            <Routes>
              <Route path='/' element={<Home key={items.id} product={items}/>}></Route>
              <Route path="highendcouture" element={<Highendcouture/>}></Route>
          <Route path="sarees" element={<Sarees/>}></Route>
          <Route path="lehanga" element={<Lehenga/>}></Route>
          <Route path="dresses" element={<Dresses/>}></Route>
          <Route path="twinningoutfits" element={<Twinningoutfits/>}></Route>

          {/* Kids components routes */}
          <Route path="girl" element={<Girl/>}></Route>
          <Route path="boy" element={<Boy/>}></Route>

           {/* Jewelery components routes */}
           <Route path="jewelrycollection" element={<Collection/>}></Route>

            {/* Books components routes */}
            <Route path="bookscollection" element={<Bookscollection/>}></Route>
            </Routes>
            {/* <RetrievedData /> */}
          </BrowserRouter>
        );
      }}
    </Query>
  );
}
export default App;