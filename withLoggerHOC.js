import React, { useEffect } from "react";

const withLogger = (WrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`${WrapperComponent.name} is mounted`);
      return () => {
        console.log(`${WrapperComponent.name} is unmounted`);
      };
    }, []);
    return <WrapperComponent {...props} />;
  };
};

export default withLogger;
