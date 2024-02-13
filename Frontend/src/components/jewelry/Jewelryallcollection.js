import React,{useState,useEffect} from 'react';
import MyNavbar from '../navbar';
import Menu from '../menu';
import Filterdisplaynav from '../filterdisplaynav';
import { Link } from 'react-router-dom';
import Product from "../Product";
import axios from "axios";
import Pagination from "../pagination";

const Jewelryallcollection = () => {
    const  [products, setProducts] = useState([]);
    const [pageSize, setPageSize] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewRowIndex, setViewRowIndex] = useState(null);
    useEffect(() => {
      axios
        .get("http://localhost:8080/jewellery")
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
           <MyNavbar/>

<nav className="p-2 ps-lg-5 pe-lg-5">
            <Link to="/" className="text-decoration-none text-dark">
                <i className="bi bi-house-fill"></i>
            </Link>
            &nbsp; / Jewelry
</nav>
        <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
            <Menu/>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-3">
        <Filterdisplaynav pageSize={pageSize} setPageSize={setPageSize} />


            <div className="d-flex flex-wrap gap-2">
            {tableData.map((product,index) => (
              <Product product={product} key={index} rendercomp='boykids'/>
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

export default Jewelryallcollection;