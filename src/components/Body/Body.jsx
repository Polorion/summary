import * as React from "react";
import Skills from "./Skills/Skills";
import Owner from "./Owner/Owner";
const Body = () => {
  return (
    <div>
      <div className={"container"}>
        <Owner />
      </div>
      <Skills />
    </div>
  );
};

export default Body;
