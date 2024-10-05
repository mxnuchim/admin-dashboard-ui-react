import React from "react";

const Button = () => {
  return (
    <a href="/dashboard">
      <div className="bg-green w-96 h-20 flex items-center justify-center rounded-[10px] cursor-pointer">
        <span className="text-white text-xl font-semibold">Login</span>
      </div>
    </a>
  );
};

export default Button;
