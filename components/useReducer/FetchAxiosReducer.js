import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  posts: {},
  error: "",
};

const reducer = (currState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        loading: false,
        posts: {},
        error: "Something went wrong",
      };
    default:
      return currState;
  }
};

function FetchAxiosReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);
  return (
    <div>
      <h1>Data fetching using Axios</h1>
      {console.log("state value", state)}
      {state.loading ? "Loading" : state.posts.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchAxiosReducer;
