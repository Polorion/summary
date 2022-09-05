import * as React from "react";
import S from "./Right.module.scss";
import { ReactComponent as Point } from "../../../assets/img/point.svg";

const Right = () => {
  return (
    <div className={S.right}>
      <div className={S.header}>
        <div className={S.name}>Лопатков Артём Дмитриевич</div>
      </div>
      <div className={S.info}>
        <p>Frontend-developer</p>
      </div>
      <div className={S.location}>
        <div className={S.city}>
          <Point />
          город Санкт-Петербург м.Купчино
        </div>
        <div className={S.old}>возраст 29лет</div>
      </div>
      <div className={S.owner}>
        <p>О себе</p>
        <p>
          Ранее работал в сфере общепита отработал на кухне 7 лет вырос до
          позиции Шеф-повар в последсвии устал от кухни и решил открыть для себя
          что-то новенькое и увидел себя в роле разработчика долго думал каким
          именно разработчиком я хочу быть и остановился на Frontend зацепил он
          меня своим творчеством и везуализацией тем что надо напрегать голову
          чтобы решаить разные задачи по написанию приложений сначало изучал сам
          язык HTML CSS JS понял что это моё и приобрел курс по Frontend от
          SkillBox после открыл для себя много нового и увлекательного
        </p>
        <div className={S.school}>
          <h2>Образование</h2>
          <p>
            в 2014 году закончил Экономико-технологический колледж питания
            получил диплом Менеджера
          </p>
          <p>
            {" "}
            в2022 году закончил обучение от Skillbox и получил дипломы о
            окночании курса: Верстки Js и React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right;
