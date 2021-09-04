import React from "react";
import main2 from "./images/main2.jpg";
let mainHeading = { height: "89vh" };

const Secondpage = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center" style={mainHeading}>
          <div className="col-md-6 col-11 mx-auto mt-4 mt-lg-0 order-lg-1 order-2">
            <h1 className="secondHeading px-lg-3">
              Feel Good About Yourself Today Stay Home, Stay Safe
            </h1>
            <p className="secondPara px-lg-4">
              Be sure the people around you make you feel good about you no
              matter what your size or health condition. In addition, if close
              friends encourage you to smoke, overeat, or drink too much, find
              some new friends who have good health habits and also want a
              healthier you.
            </p>
            <p className="secondPara px-lg-4">
              "Instead, focus on being healthy from the inside out," Magee says.
              "Eat well, and exercise regularly. And remember that you can be
              sexy and look and feel fabulous and not be thin."
            </p>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <img
              src={main2}
              style={{ width: "90%" }}
              alt="Main Page Icon"
              className="img-fluid ps-5 mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondpage;
