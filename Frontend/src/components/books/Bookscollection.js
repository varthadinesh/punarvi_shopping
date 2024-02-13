import React, { useEffect, useState } from "react";
import MyNavbar from "../navbar";
import Menu from "../menu";
import { Link } from "react-router-dom";
import Homebannerimg from "../homebannerimg";
import Filterdisplaynav from "../filterdisplaynav";
import Product from "../Product";
import axios from "axios";
import Pagination from "../pagination";

const Bookscollection = () => {
  const  [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewRowIndex, setViewRowIndex] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  },[]);
  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = products.slice(startIndex, endIndex);
  return (
    <>
      <MyNavbar />
      <div>
        <Homebannerimg />
      </div>
      <div className="d-lg-flex justify-content-around mt-5 p-lg-5 p-2">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <nav className="pb-3">
            <Link to="/" className="text-decoration-none text-dark">
              <i className="bi bi-house-fill"></i>
            </Link>
            &nbsp; / Books /&nbsp; Books collection
          </nav>
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 ps-3">
        <Filterdisplaynav pageSize={pageSize} setPageSize={setPageSize} />

          <div className="d-flex flex-wrap gap-2">
            {tableData.map((product,index) => (
              <Product product={product} key={index} rendercomp='books'/>
            ))}
          </div>
        </div>
        <Pagination
            stateData={products}
            pageSize={pageSize}
            setViewRowIndex={setViewRowIndex}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </div>
    </>
  );
};

export default Bookscollection;
