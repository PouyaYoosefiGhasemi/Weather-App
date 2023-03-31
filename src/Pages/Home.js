import React from "react";
import { Layout } from "../Layout";
import Button from "./Components/Button";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Layout class={"flex flex-col justify-around pl-5  "}>
        <div className="flex justify-around flex-wrap items-center">
          <img src={require("../img/home.gif")} width="450px" alt="home gif" />

          <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded p-1">
            <div className="flex flex-col items-center p-10  duration-300 rounded bg-[#94b9cb]">
              <h1 className="font-bold text-4xl  mb-4 ">
                Get the most fun <br /> weather app
              </h1>
              <Link to="/response">
                <div className=" bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 rounded">
                  <Button>
                    <h3>Let's Start</h3>
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
