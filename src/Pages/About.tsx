import Navbar from "../Components/Navbar/Navbar";
import ItemMenu from "../Components/AboutPageComponents/ItemMenu";
const About = () => {
  return (
    <div className="flex h-[100vh] flex-col md:flex-row md:items-center md:justify-center flex-1">
      <div className="hidden md:flex md:justify-start">
        <Navbar />
      </div>
      <div>
        <ItemMenu />
      </div>
    </div>
  );
};

export default About;
