import * as React from "react";
import S from "./Left.module.scss";
import foto from "../../../assets/img/foto.png";
const Left = () => {
  const skills = [
    "React",
    "Redux",
    "TypeScript",
    "Flux",
    "WebPack",
    "Jwt token",
    "RestApi",
    "hooks",
    "JS",
    "HTML5",
    "SCSS",
    "REST",
    " Git",
  ];
  return (
    <>
      <div className={S.left}>
        <img src={foto} alt="" />
        <div className={S.contacts}>
          <div>телефон: +7 911 829 77 63</div>{" "}
          <a target={"_blank"} href={"https://t.me/PoloRioN"}>
            telegram:https://t.me/PoloRioN
          </a>
        </div>
        <div className={S.skills}>
          мои навыки
          <ul>
            {skills.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Left;
