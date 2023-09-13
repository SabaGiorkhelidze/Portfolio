import React from "react";
import "./item.scss";
import CircularMenu from "./CircularMenu";

const ItemMenu = () => {
  const items: Array<[string, string]> = [
    ["About", "#3E84E6"],
    ["Contact", "#15AB88"],
    ["Portfolio", "#eb5089"],
    ["LinkedIn", "#AFD91A"],
    ["Dribbble", "#F27127"],
    ["Facebook", "#07C7F2"],
    ["Twitter", "#9768D1"],
    ["Instagram", "#F2B705"],
  ];

  return <CircularMenu items={items} />;
};

export default ItemMenu;
