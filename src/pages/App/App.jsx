import React from "react";
import downArrow from "../../assets/downArrow.png";
import star from "../../assets/star.png";
import { Link } from "react-router";

const App = ({ singleApp }) => {
  
  const {id, image, title, downloads, ratingAvg } = singleApp;


  return (
    <Link to={`/details/${id}`}>
      <div className="card bg-base-100 w-70 shadow-md">
        <figure className="p-4">
          <img src={image} className="w-50" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline border-none bg-[#f5f5f5] text-[#00D390] font-semibold">
              <img src={downArrow} alt="" /> {downloads}M
            </div>
            <div className="badge badge-outline border-none bg-[#FFF0E1] text-[#FF8811] font-semibold">
              <img src={star} alt="" /> {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
