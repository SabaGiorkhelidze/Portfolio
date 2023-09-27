import Navbar from "../Components/Navbar/Navbar";
import ItemMenu from "../Components/AboutPageComponents/CircularMenuItems/ItemMenu";
import Header from "../Components/AboutPageComponents/Header";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="hidden md:flex md:justify-start ">
        <Navbar />
      </div>

      <div className="flex w-full h-auto mt-20 justify-center items-center flex-col gap-5">
        <Header />
        <ItemMenu />
      </div>
    </div>
  );
};

export default About;
