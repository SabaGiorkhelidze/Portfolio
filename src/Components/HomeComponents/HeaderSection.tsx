import { motion } from "framer-motion";

const HeaderSection = () => {
  const buttonVariants = {
    hover: {
      color: "white",
      backgroundColor: "rgb(251 146 60)",
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const textVariants = {
    initial: {},
    animate: {
      textShadow:
        "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000",
      color: "#fff6a9",
    },
  };

  return (
    <div className="w-full  md:w-2/3  px-2">
      <div className=" flex flex-col py-2">
        <div className="text-center space-y-2 md:text-start md:pl-24">
          <h3 className="text-lg text-orange-400 md:text-xl">
            Hi there , I am
          </h3>
          <motion.h1
            className="text-2xl md:text-5xl"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            Saba Giorkhelidze
          </motion.h1>
          <h1 className="text-2xl md:text-5xl text-slate-600">
            I make Awesome Websites
          </h1>
          <p>Full Stack Web Developer, Freelancer</p>
          <p>Based in Tbilisi, Georgia</p>
        </div>
        <div className="w-full flex justify-center my-3 md:justify-start md:pl-24 md:py-10">
          <motion.button
            className="border text-orange-400 border-orange-400 py-2 px-2 rounded-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
