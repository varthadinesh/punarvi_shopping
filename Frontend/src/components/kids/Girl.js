import React, { useEffect, useState } from "react";
import MyNavbar from "../navbar";
import Menu from "../menu";
import { Link } from "react-router-dom";
import Filter from "./filter";
import Filterdisplaynav from "../filterdisplaynav";
import axios from "axios";
import Product from "../Product";

const Girl = () => {
    const  [products, setProducts] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8080/girlkids")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    },[]);
  return (
    <>
      <MyNavbar />
      <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; / Kids / Girl
      </nav>
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-3">
          <Filterdisplaynav />
          <Filter />
          <div className="d-flex flex-wrap gap-2">
            {products.map((product,index) => (
              <Product product={product} key={index} rendercomp='girlkids'/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Girl;
