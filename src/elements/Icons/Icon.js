import React from "react";
import Press from "./Press";
import Arrow from "./Arrow";

const Icon = ({ name }) => {
  const renderIcon = (name) => {
    switch (name) {
      case "press":
        return <Press />;
      case "arrow":
        return <Arrow />;
      default:
        return;
    }
  };

  return renderIcon(name);
};

export default Icon;
