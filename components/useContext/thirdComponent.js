import React, { useContext } from "react";
import { userContext, profileContext } from "./firstComponent";

function ThirdComponent() {
  const user = useContext(userContext);
  const profile = useContext(profileContext);
  return (
    <>
      <h1>
        I am {user} and {profile}{" "}
      </h1>
    </>
  );
}

export default ThirdComponent;
