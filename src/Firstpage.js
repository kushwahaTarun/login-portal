import React from "react";
import { NavLink } from "react-router-dom";
import main from "./images/main.jpg";

let mainHeading = { height: "89vh" };

const Firstpage = () => {
  return (
    <div>
      <div className="container">
        <div
          className="row w-auto d-flex align-items-center mx-3"
          style={mainHeading}
        >
          <div className="col-md-6 col-12 mx-auto firstElem pb-lg-5 order-lg-1 order-2">
            <h1>
              <span>Welcome Back,</span> Enter Your Details          
            </h1>
            <NavLink to="/contact">
              <button
                type="button"
                class="btn btn-outline-primary btn-lg mt-sm-2"
              >
                Fill Details
              </button>
            </NavLink>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <img src={main} className="img-fluid firstImg" alt="Main Page Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
// <!--getfitStrong & Motivated-->

export default Firstpage;
