// import React from 'react'
import node from "../../assets/nodejs-removebg-preview.png";
import react from "../../assets/test22-removebg-preview.png";
import py from "../../assets/py-removebg-preview.png";
import mongo from "../../assets/mongo-removebg-preview.png";

const ImagesSection = () => {
  return (
    <div className=" md:w-1/2 ">
      <div className="relative">
        <img src={node} alt="" className="w-20 h-24 relative top-10 left-64" />
        <img src={react} alt="" className="w-32 h-32 relative left-20" />
        <img src={py} alt="" className="w-24 h-24 relative left-80" />
        <img
          src={mongo}
          alt=""
          className="w-24 h-24 relative bottom-10 left-12"
        />
      </div>
    </div>
  );
};

export default ImagesSection;
