import * as React from "react";
import S from "./Owner.module.scss";
import Project from "../UI/Project/Project";
import pomodoro from "../../../assets/img/pomodoro.png";
import timer from "../../../assets/img/timer.png";
import todo from "../../../assets/img/todo.png";
import redit from "../../../assets/img/reddit.png";
import js from "../../../assets/img/js.png";

const Owner = () => {
  const project = [
    {
      title: " Таймер помодоро",
      text: "Таймер Помодоро помогает в планировании времени на рекешение задач с возможностью просмотра статискики ",
      url: "https://pomodoro-hazel.vercel.app/",
      img: pomodoro,
    },
    {
      title: "Reddit best post",
      text: "Работа с Rest Api зеркало реддита с лучшими постами (SSR , Jwt-token)",
      url: "https://mirror-reddit-owner.herokuapp.com/post",
      img: redit,
    },
    {
      title: "Таймер",
      text: "Секундомер с возможность подсчета кругов и статистики между каждым кругом",
      url: "https://timer-eight-teal.vercel.app/",
      img: timer,
    },
    {
      title: "ToDo",
      text: "Список дел на день чтобы расплонировать свой день по задачам",
      url: "https://todo-react-ten-vert.vercel.app/",
      img: todo,
    },  {
      title: "JS",
      text: "4-ре проеккта на чистом js в 1-ном слайдере: игрушка ,слайдер , drag and drop,мерцающие квадраты ",
      url: "https://polorion.github.io/JStesting/#",
      img: js,
    },
  ];
  return (
    <div className={S.body}>
      <div className={S.owner}>Обомне</div>
      <div className={S.info}>
        Меня завут Артём я позитивный=) frontend-developer люблю писать
        приложения которые будут помогать людям решать их трудности уже почти
        как 1.5 года погружаюсь в дебри разработки и получаю от этого
        колосальное удовольствие!
      </div>
      <div className={S.owner}>Опыт работы</div>
      <div className={S.info}>
        Студент двухгодового курса Frontend-разработчик, апрель 2020 - по
        настоящее время На данный момент я активно занимаюсь изучением
        бибилотеки React, получил диплом после прохождения курса по верстке и
        закончил курс по JS,React Умею: создавать SPA приложения, верстать сайты
        и лендинги по макетам , Создавать страницы комфортные для просмотра и
        взаимодействия на любом экране и устройстве, в любом браузере, не
        забывая и о IE11, Взаимодействовать с различными API, используя GET и
        POST запросы, Подключать дополнительные библиотеки, css и js файлов,
        npm-пакетов, Соблюдать кодстайл, писать понятный и легкий для прочтения
        код.
      </div>{" "}
      <div className={S.owner}>Мои работы</div>
      <div className={S.infoSit}>
        {project.map((el, i) => {
          return (
            <Project
              key={i}
              title={el.title}
              url={el.url}
              img={el.img}
              text={el.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Owner;
