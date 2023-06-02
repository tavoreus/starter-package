import React from "react";
import Icon from "../Icons/Icon";

const Button = ({ label, leftIcon, rightIcon, handleClick, className }) => {
  const buttonStyles =
    "mavie-bg-yellow-dark mavie-text-green-dark rounded-3xl p-2 " + className;

  return (
    <button onClick={handleClick} className={buttonStyles}>
      {leftIcon && <Icon name={leftIcon} />}
      {label}
      {rightIcon && <Icon name={rightIcon} />}
    </button>
  );
};

export default Button;
