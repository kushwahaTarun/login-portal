import React from "react";

const Table = ({ arrayDetails }) => {
  return (
    <>
      <div className="container mt-4 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>

          {arrayDetails.map((item, index) => {
            return (
              <>
                <tbody id = {index}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Table;
