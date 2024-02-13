import React from 'react';
const Product = (props) => {
    // console.log(props);
    // const product = props.product;
    // var image="",name="",price=0;
    // if(props.rendercomp === "highendcouture"){
    //     image = props.product.hec_image;
    //     name = props.product.hec_name;
    //     price = props.product.hec_price;
    // }
    // else if(props.rendercomp === "sarees"){
    //     image = props.product.saree_image;
    //     name = props.product.saree_name;
    //     price = props.product.saree_price;
    // }
    // else if(props.rendercomp === "lehenga"){
    //     image = props.product.lehenga_image;
    //     name = props.product.lehenga_name;
    //     price = props.product.lehenga_price;
    // }
    // else if(props.rendercomp === "dresses"){
    //     image = props.product.dresses_image;
    //     name = props.product.dresses_name;
    //     price = props.product.dresses_price;
    // }
    // else if(props.rendercomp === "twinnings"){
    //     image = props.product.twinnings_image;
    //     name = props.product.twinnings_name;
    //     price = props.product.twinnings_price;
    // }
    // else if(props.rendercomp === "boykids"){
    //     image = props.product.boykids_image;
    //     name = props.product.boykids_name;
    //     price = props.product.boykids_price;
    // }
    // else if(props.rendercomp === "girlkids"){
    //     image = props.product.girlkids_image;
    //     name = props.product.girlkids_name;
    //     price = props.product.girlkids_price;
    // }
    // else if(props.rendercomp === "jewelry"){
    //     image = props.product.jewelry_image;
    //     name = props.product.jewelry_name;
    //     price = props.product.jewelry_price;
    // }
    // else if(props.rendercomp === "books"){
    //     image = props.product.books_image;
    //     name = props.product.books_name;
    //     price = props.product.books_price;
    // }

  return (
      <div className="shadow rounded">
        <div className="card" style={{width: "320px"}}>
            <img src={props.product.image} height="300px" className="card-img-top" alt="product"/>
            <div className="card-body">
                <h5 className="card-text">{props.product.name}</h5>
                <p className="card-text">&#8377; {props.product.price}.00</p>
            </div>
        </div>
      </div>
  );
}
export default Product;