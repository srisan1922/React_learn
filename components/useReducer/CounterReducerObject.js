import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return state.firstCounter > 0
        ? { firstCounter: state.firstCounter - action.payload }
        : state;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterReducerObject() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* this count.firstComponent deterimined the entire state of the componet  */}
      <h1>Count - {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment + 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement - 1
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment + 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement - 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterReducerObject;
