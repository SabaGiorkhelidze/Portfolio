import React, { ReactElement, useState } from "react";
import CircularMenuItem from "./CircularMenuItem";
type CircularMenuProps = {
  items: Array<[string, string]>;
  icon: ReactElement;
};

const CircularMenu: React.FC<CircularMenuProps> = ({ items, icon }) => {
  const rotation = 360 / items.length;

  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(prevBool => !prevBool)
  }

  return (
    <div className="circular-menu">
      <div className="menu-button flex justify-center items-center" onClick={handleSetIsOpen}>
        {icon}
      </div>
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
