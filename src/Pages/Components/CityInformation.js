import React from "react";
import "./CityInformation.css";

function CityInformation(props) {
  return (
    <div className="city-container">
      <div>
        <h1 className="text-5xl font-bold flex justify-around">
          {props.name}{" "}
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt="icon"
          />{" "}
        </h1>
        <h2 className="text-base">{Date()}</h2>
      </div>

      <h5 className="text-7xl font-bold flex">
        {props.temp}{" "}
        <img
          src={require("../../img/celsius.png")}
          alt="celsius"
          className="w-12 h-12"
        />
      </h5>
      <h3 className="text-4xl font-bold ">{props.weather}</h3>
    </div>
  );
}

export default CityInformation;
