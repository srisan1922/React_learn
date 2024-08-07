import React from "react";
import ReactDOM from "react-dom/client";
import withLogger from "./withLoggerHOC";
import FirstComponent from "./components/useContext/firstComponent";
import CounterReducer from "./components/useReducer/CounterReducer";
import CounterReducerObject from "./components/useReducer/CounterReducerObject";
import FetchAxiosReducer from "./components/useReducer/FetchAxiosReducer";

//###############################################
//HOC code
const Title = ({ name }) => {
  return <h1>hi, My Name is {name}</h1>;
};
const EnrollTitle = withLogger(Title);
//###############################################

const HeadingComponent = () => {
  return (
    <div>
      {/* <h1>Below code is for HOC</h1>
      <EnrollTitle name={"Srisan"} />
      <h1>########### Below code is for useContext ###########</h1>
      <FirstComponent />
      <h1>########### Below code is for useReducer Hook ###########</h1>
      <CounterReducer />
      <h1>
        ########### Below code is for COMPLEX using Type useReducer Hook
        ###########
      </h1>
      <CounterReducerObject /> */}
      <h1>useReducer with data fetching using axios</h1>
      <FetchAxiosReducer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
