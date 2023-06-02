import React from "react";
import Icon from "../Icons/Icon";

const Button = ({ label, leftIcon, rightIcon, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={`mavie-bg-yellow-dark mavie-text-green-dark rounded-3xl p-2 ${className}`}
    >
      {leftIcon && <Icon name={leftIcon} />}
      {label}
      {rightIcon && <Icon name={rightIcon} />}
    </button>
  );
};

export default Button;
