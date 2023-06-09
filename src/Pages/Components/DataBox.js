import React from "react";
import "./DataBox.css";

function DataBox(props) {
  return (
    <div className="data-container mobile:p-2.5 Smobile:items-center">
      <h1 className="data-container-title">{props.header}</h1>

      <div className="data-container-details ">
        <h3 className="data-container-data">{props.data}</h3>
        <h5 className="data-container-exp Smobile:hidden w-36 text-center">{props.desc}</h5>
      </div>
    </div>
  );
}

export default DataBox;
