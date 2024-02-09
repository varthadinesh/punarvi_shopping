import React from "react";
import Carousel from "react-elastic-carousel";
import kidsurl from '../images/kids11.avif'
import womenurl from '../images/women.avif'
import jeweleryurl from '../images/jewelry.jpg'
import booksurl from '../images/books.avif'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Curosel() {
  return (
    <>
      <div className=" mt-4">
        <Carousel breakPoints={breakPoints}>
          <div className="custom-item">
          <div className="m-3 position-relative text-center carouselslide">
                    <img src={kidsurl} alt="engage pic" />
                  <h3 className="position-absolute fw-bold text-white" style={{ bottom: "10%", width: "100%", left: 0, right: 0, margin: "auto", textShadow: "2px 3px 2px black" }}>
                KIDS
              </h3>
                    </div>
          </div>
          <div className="custom-item">
          <div className="m-3 position-relative text-center carouselslide">
                    <img src={womenurl} alt="engage pic"  />
                    <h3 className="position-absolute fw-bold text-white" style={{ bottom: "10%", width: "100%", left: 0, right: 0, margin: "auto", textShadow: "2px 3px 2px black" }}>
                WOMEN
              </h3>
                    </div>
          </div>
          <div className="custom-item">
          <div className="m-3 position-relative text-center carouselslide">
                    <img src={jeweleryurl} alt="engage pic"/>
                   
                    <h3 className="position-absolute fw-bold text-white" style={{ bottom: "10%", width: "100%", left: 0, right: 0, margin: "auto", textShadow: "2px 3px 2px black" }}>
                JEWELRY
              </h3>
                    </div>
          </div>
          <div className="custom-item">
          <div className="m-3 position-relative text-center carouselslide">
                    <img src={booksurl} alt="engage pic"  />
                    <h3 className="position-absolute fw-bold text-white" style={{ bottom: "10%", width: "100%", left: 0, right: 0, margin: "auto", textShadow: "2px 3px 2px black" }}>
                BOOKS
              </h3>
                    
                    </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Curosel;