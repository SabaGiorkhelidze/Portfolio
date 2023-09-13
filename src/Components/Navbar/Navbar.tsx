import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        {/* left  */}
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mx-8 my-1 cursor-pointer"
          >
            Saba Giorkhelidze
          </motion.div>
        </Link>
        <div className="flex flex-grow"></div>
        {/* right  */}
        <Link to={"/about"}>
          <motion.div whileHover={{ scale: 1.1 }} className="mx-4 my-1 ">
            About
          </motion.div>
        </Link>
        <Link to={"/accountSettings"}>
          <motion.div whileHover={{ scale: 1.1 }} className="mx-6 my-1">
            Account
          </motion.div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
