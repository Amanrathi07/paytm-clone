import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-medium"
    >
      {children}
    </button>
  );
};

export default Button;
