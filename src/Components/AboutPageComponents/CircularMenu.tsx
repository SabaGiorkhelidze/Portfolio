import React, { useState } from "react";
import CircularMenuItem from "./CircularMenuItem";

type CircularMenuProps = {
  items: Array<[string, string]>;
};

const CircularMenu: React.FC<CircularMenuProps> = ({ items }) => {
  const rotation = 360 / items.length;

  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(prevBool => !prevBool)
  }

  return (
    <div className="circular-menu">
      <div className="menu-button" onClick={handleSetIsOpen}></div>
      {items.map(([page, color], index) => (
        <CircularMenuItem
          key={index}
          page={page}
          color={color}
          rotation={rotation * index}
          menuIsOpen={isOpen}
          transitionDelay={index * 75}
        />
      ))}
    </div>
  );
};

export default CircularMenu;
