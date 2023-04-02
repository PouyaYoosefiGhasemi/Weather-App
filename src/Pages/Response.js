import React from "react";
import { Layout } from "../Layout";
import CityInformation from "./Components/CityInformation";
import DataBox from "./Components/DataBox";
import SearchBox from "./Components/SearchBox";
import axios from "axios";

const API_KEY = "5376fba1921678382d435f63acc34440";

class Response extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }
  async ApiCall() {
    document.getElementById("loading-ico").style.display = "block";
    document.getElementById("respond-err").style.display = "none";

    const searchData = document.getElementById("city-choice").value;
    console.log(searchData);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&APPID=${API_KEY}&units=metric`;

    let data;
    await axios
      .get(URL)
      .then((resolve) => {
        data = resolve.data;
        this.setState({ data });
      })
      .catch((err) => {
        document.getElementById("loading-ico").style.display = "none";
        document.getElementById("respond-err").style.display = "block";
      });

    document.getElementById("loading-ico").style.display = "none";
  }

  render() {
    //--------------weather description start--------
    let data = this.state.data;
    let windDirection;
    let visibleA;
    let tempFeel;

    if (data) {
      let direction = data.wind.deg;
      if (
        (340 < direction && direction <= 360) ||
        (0 <= direction && direction <= 20)
      ) {
        windDirection = "Norh";
      } else if (20 < direction && direction <= 70) {
        windDirection = "Norh-East";
      } else if (70 < direction && direction <= 110) {
        windDirection = "East";
      } else if (110 < direction && direction <= 160) {
        windDirection = "South-East";
      } else if (160 < direction && direction <= 200) {
        windDirection = "South";
      } else if (200 < direction && direction <= 250) {
        windDirection = "South-West";
      } else if (250 < direction && direction <= 290) {
        windDirection = "West";
      } else if (290 < direction && direction <= 340) {
        windDirection = "Norh-West";
      }
      let visibility = data.visibility;

      if (visibility < 100) {
        visibleA = "Very corrupt and poor Visibility";
      } else if (visibility < 500) {
        visibleA = "Poor visibility";
      } else if (visibility < 2000) {
        visibleA = "Isibility is by the weather condition";
      } else if (visibility < 5000) {
        visibleA = "Visibility is acceptable";
      } else if (visibility < 9000) {
        visibleA = "We have a good visibility";
      } else {
        visibleA = "Full visibility";
      }
      let humidity = data.main.humidity;
      let tempGap = Math.abs(data.main.feels_like - data.main.temp);
      if (tempGap >= 5) {
        tempFeel =
          "Due to the humidity , the temprature feels lower than it should";
      } else if (humidity < 25) {
        tempFeel = "Low humidity";
      } else if (humidity < 60) {
        tempFeel = "High humidity";
      } else {
        tempFeel = "Very high humidity";
      }
    }
    //----------weather description end---------

    return (
      <Layout
        class={
          " flex justify-between mobile:justify-center overflow-auto flex-wrap bg-cover bg-fixed bg-background"
        }
      >
        {!data && (
          <div className="flex flex-col items-center w-screen animate__animated animate__fadeInDown">
            <SearchBox id={"city-choice"} action={() => this.ApiCall()} />
            <div
              id="respond-err"
              className="rounded-b -mt-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate__animated animate__slideInDown  p-1 hidden"
            >
              <h1 className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 p-2 rounded-b ">
                Something Went Wrong , Try Again
              </h1>
            </div>
            <img
              src={require("../img/yy3.gif")}
              id="loading-ico"
              width="100px"
              alt="home gif"
              className=" hidden animate__animated animate__zoomIn self-center"
            />
          </div>
        )}

        {data && (
          <div className=" animate__animated animate__slideInDown flex flex-col ">
            <div
              id="respond-err"
              className="rounded-b -mt-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate__animated animate__slideInDown  p-1 hidden"
            >
              <h1 className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 p-2 rounded-b ">
                Something Went Wrong , Try Again
              </h1>
            </div>
            <img
              src={require("../img/yy3.gif")}
              id="loading-ico"
              width="100px"
              alt="home gif"
              className=" hidden animate__animated animate__zoomIn self-center"
            />
            <CityInformation
              name={data.name}
              weather={data && data.weather[0].main}
              temp={data && Math.round(data.main.temp)}
              icon={data && data.weather[0].icon}
            />
          </div>
        )}

        {data && (
          <div
            className="animate__animated animate__zoomIn flex w-[320px] flex-col  justify-around
           items-center bg-zinc-500 bg-opacity-60 mobile:bg-inherit mobile:w-screen mobile:flex-row mobile:flex-wrap"
          >
            <div className="flex flex-wrap mobile:flex-nowrap w-full justify-center ">
              <DataBox
                header={"Clouds"}
                data={data && data.clouds.all + "%"}
                desc={data && data.weather[0].description}
              />

              <DataBox
                header={"Humidity"}
                desc={data && tempFeel}
                data={data && data.main.humidity + "%"}
              />
            </div>
            <div className="flex flex-wrap mobile:flex-nowrap w-full justify-center">
              <DataBox
                header={"Visibility"}
                desc={data && visibleA}
                data={data && data.visibility + "m"}
              />
              <DataBox
                header={"Wind"}
                desc={data && "Experiencing a wind from " + windDirection}
                data={data && data.wind.speed + "m/s"}
              />
            </div>
            <SearchBox id={"city-choice"} action={() => this.ApiCall()} />
          </div>
        )}
      </Layout>
    );
  }
}

export default Response;
