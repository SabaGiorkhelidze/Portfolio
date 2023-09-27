import { motion } from "framer-motion";

const Header = () => {
  const textVariants = {
    initial: {},
    animate: {
      textShadow:
        "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000",
      color: "#fff6a9",
    },
  };

  return (
    <div className="w-full flex justify-center mb-5">
      <div className="text-center">
        <motion.h1
          className="text-2xl md:text-5xl"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          About Me
        </motion.h1>
        <p className="text-center px-4 md:px-48 md:text-start ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nesciunt laudantium mollitia soluta explicabo omnis sapiente dolor blanditiis? Natus quod, similique unde rerum eligendi laudantium aliquam placeat? Deleniti voluptates, provident recusandae necessitatibus aspernatur cupiditate eos, magnam et nobis atque alias dolore corrupti corporis perferendis vel esse, suscipit minus ipsa. Necessitatibus.</p>
      </div>
    </div>
  );
};

export default Header;
