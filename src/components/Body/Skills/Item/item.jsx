import * as React from "react";
import S from "../Skills.module.scss";

const Item = (props) => {
  return (
    <div className={S.item}>
      <div className={S.nameSkill}>{props.title}</div>
      <div className={S.line}>
        <div className={S.prod} style={{ width: `${props.progress}%` }}></div>
      </div>
    </div>
  );
};

export default Item;
