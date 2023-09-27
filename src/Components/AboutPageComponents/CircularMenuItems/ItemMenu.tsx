// import React from "react";
import "./item.scss";
import CircularMenu from "./CircularMenu";
import { motion } from "framer-motion";
import { ReactOriginal } from "devicons-react";
import { MysqlPlain } from "devicons-react";
import {
  ReactItems,
  DbItems,
  PythonItems,
  OtherLangData,
} from "../../../Data/SkillsData";
import { PythonOriginal } from "devicons-react";
import { AppwritePlain } from "devicons-react";

const ItemMenu = () => {
  const textVariants = {
    initial: {},
    animate: {
      textShadow:
        "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000",
      color: "#fff6a9",
    },
  };

  return (
    <div className="flex flex-col w-full">
      <div className="text-center">
        <motion.h1
          className="text-2xl md:text-5xl"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          Skills
        </motion.h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-2 md:mt-4 md:grid md:grid-cols-4 px-36 w-full md:gap-y-[100px] ">
        <CircularMenu items={ReactItems} icon={<ReactOriginal size={50} />} />
        <CircularMenu items={DbItems} icon={<MysqlPlain size={50} />} />
        <CircularMenu items={PythonItems} icon={<PythonOriginal size={50} />} />
        <CircularMenu
          items={OtherLangData}
          icon={<AppwritePlain size={50} />}
        />
      </div>
    </div>
  );
};

export default ItemMenu;
