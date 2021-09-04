import React, { useState } from "react";
import Table from "./Table";

const Contact = () => {
  let [arr, newArr] = useState([]); //creating a blank array for Storing the data from the Login form

  //Fields of an Input field

  let [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  //onChange handler function

  let updateData = (e) => {
    let { name, value } = e.target;
    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  //function Displaying the data from the Input Field as a list

  let storeData = (e) => {
    e.preventDefault();

    if (data.name.length < 3 || data.name.length === undefined) {
      alert("value to short for Name field");
    }
    if (data.contact.length < 10) {
      alert("Please Fill the correct contact details");
    }

    //Storing the data in an Array by using updated function

    newArr([...arr, data]);

    //setting an Input field to blank after storing all the values in a list
    setData((preVal) => {
      return {
        ...preVal,
        name: "",
        email: "",
        contact: "",
      };
    });
  };
  return (
    <>
      <h1 className="text-center display-3" style={{ color: "#e74c3c" }}>
        Login Details
      </h1>
      <div className="container w-50 mx-auto mt-3">
        <form onSubmit={storeData}>
          <div className="mb-3">
            <label HTMLfor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              value={data.name}
              onChange={updateData}
              name="name"
            />
          </div>

          <div className="mb-3">
            <label HTMLfor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your E-mail"
              value={data.email}
              onChange={updateData}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label HTMLfor="exampleInputPassword1" className="form-label">
              Contact
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Contact"
              value={data.contact}
              onChange={updateData}
              name="contact"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Table arrayDetails={arr} />
    </>
  );
};

export default Contact;
