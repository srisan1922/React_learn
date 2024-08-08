import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../../state/slices/customerSlice";

function CustomerView() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };

  return (
    <>
      <h1>Customer List </h1>
      <ul>
        {customers.map((cust, index) => {
          return (
            <li key={index}>
              {cust}{" "}
              <button
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CustomerView;
