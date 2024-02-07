import React from "react";
import Carousel from "react-elastic-carousel";
import kidsurl from '../images/kids.jpeg'
import womenurl from '../images/women.jpeg'
import jeweleryurl from '../images/jewelry.jpeg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Curosel() {
  return (
    <>
      <div className=" mt-4">
        <Carousel breakPoints={breakPoints}>
          <div className="custom-item">
          <div className="m-3 position-relative text-center">
                    <img src={kidsurl} alt="engage pic" style={{ width: "320px", height: "500px" }} />
                  
                    </div>
          </div>
          <div className="custom-item">
          <div className="m-3 position-relative text-center">
                    <img src={womenurl} alt="engage pic" style={{ width: "320px", height: "500px" }} />
                   
                    </div>
          </div>
          <div className="custom-item">
          <div className="m-3 position-relative text-center">
                    <img src={jeweleryurl} alt="engage pic" style={{ width: "320px", height: "500px" }} />
                   
                    
                    </div>
          </div>
          <div className="custom-item">Four</div>
        </Carousel>
      </div>
    </>
  );
}

export default Curosel;