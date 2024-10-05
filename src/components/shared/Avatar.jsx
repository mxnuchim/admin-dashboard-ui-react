import React from "react";

const Avatar = ({ className, image, alt }) => {
  return (
    <img
      src={image}
      alt={alt ?? "Avatar"}
      className={`w-8 h-8 rounded-full object-cover ${className}`}
    />
  );
};

export default Avatar;
