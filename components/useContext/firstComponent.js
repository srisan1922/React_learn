import React from "react";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";
export const userContext = React.createContext();
export const profileContext = React.createContext();

function FirstComponent() {
  return (
    <>
      <SecondComponent />
      <userContext.Provider value={"Srisan GJ"}>
        <profileContext.Provider value={"Senior React Developer"}>
          <ThirdComponent />
        </profileContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default FirstComponent;
