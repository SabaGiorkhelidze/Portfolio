import React from "react";

type propsType = {
  image: string;
  name: string;
  details: string;
};

const ProjectContainer = ({ image, name, details }: propsType) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default ProjectContainer;
