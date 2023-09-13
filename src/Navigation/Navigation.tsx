import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Navigation;
