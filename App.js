import React from "react";
import ReactDOM from "react-dom/client";
import withLogger from "./withLoggerHOC";
import FetchAxiosReducer from "./components/useReducer/FetchAxiosReducer";
import CustomerList from "./components/reduxToolkit/customerList";
import { Provider } from "react-redux";
import { store } from "./state/store";
import MousePointer from "./components/renderProps/MousePointer";

const HeadingComponent = () => {
  return (
    // <Provider store={store}>
    //   <div>
    //     <h1>Customer list using useState</h1>
    //     <CustomerList />
    //   </div>
    // </Provider>
    <>
      <h1> Mouse pointer render</h1>
      <MousePointer
        render={({ x, y }) => {
          <h1>
            the mouse pointer is at {x} and {y}
          </h1>;
        }}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
