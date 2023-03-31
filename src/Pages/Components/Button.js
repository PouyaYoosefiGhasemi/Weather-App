import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      onClick={props.action}
      className=" bg-[#94b9cb] text-red-800 h-10  w-36 rounded  
     hover:bg-red-800 duration-300 hover:text-red-200 "
    >
      {props.children}
    </button>
  );
};

export default Button;
