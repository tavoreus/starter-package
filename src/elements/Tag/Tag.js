import React from "react";
import Icon from "../Icons/Icon";

const Tag = ({ label, leftIcon, rightIcon }) => {
  return (
    <span className="Tag mavie-bg-beige-soft mavie-text-green-dark rounded-2xl p-2 shadow-md">
      {leftIcon && <Icon name={leftIcon} />} {label}{" "}
      {rightIcon && <Icon name={rightIcon} />}
    </span>
  );
};

export default Tag;
