import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "../../state/slices/customerSlice";
import { useDispatch } from "react-redux";
import CustomerView from "./CustomerView";

function CustomerList() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  //   const [customers, setCustomers] = useState([]);

  const addCustomer = () => {
    if (name) {
      //   setCustomers((preValue) => [...preValue, name]);
      dispatch(addCustomerAction(name));
      setName("");
    }
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={addCustomer}>Add Customer</button>
        <button onClick={addCustomer}>Add Customer</button>
        <CustomerView />
      </div>
    </>
  );
}

export default CustomerList;
