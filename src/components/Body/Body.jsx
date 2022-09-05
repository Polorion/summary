import * as React from "react";
import S from "./Body.module.scss";
import Left from "./Left/Left";
import Right from "./Right/Right";
import Skills from "./Skills/Skills";
import Owner from "./Owner/Owner";
const Body = () => {
  return (
    <div className={S.body}>
      <div className={"container"}>
        <Owner />
      </div>
      <Skills />
    </div>
  );
};

export default Body;
