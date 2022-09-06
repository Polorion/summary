import * as React from "react";
import S from "./Skills.module.scss";
import Item from "./Item/item";

const Skills = () => {
  const skills = [
    { title: "React", progress: 60 },
    { title: "Redux", progress: 90 },
    { title: "JS", progress: 65 },
    { title: "TypeScript", progress: 30 },
    { title: "HTML5", progress: 70 },
    { title: "CSS", progress: 80 },
    { title: "hooks", progress: 70 },
    { title: "Flux", progress: 76 },
    { title: "SCSS", progress: 40 },
    { title: "WebPack", progress: 40 },
    { title: "Jwt token", progress: 55 },
    { title: "RestApi", progress: 90 },
    { title: "Git", progress: 50 },
  ];
  return (
    <div className={S.skills}>
      <h2>Ключевые навыки</h2>
      <div className={`${S.body} container`}>
        {skills.map((el) => {
          return <Item title={el.title} progress={el.progress} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
