// import React from 'react'
import HeaderSection from "../Components/HomeComponents/HeaderSection";
import ImagesSection from "../Components/HomeComponents/ImagesSection";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col md:flex-row md:items-center  border-4 border-white flex-1">
      <div className="hidden md:flex md:justify-start">
        <Navbar />
      </div>
      <HeaderSection />
      <ImagesSection />
    </div>
  );
};

export default Home;
