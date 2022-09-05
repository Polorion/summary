import * as React from "react";
import S from "./Header.module.scss";
import logo from "../../assets/img/foto.png";
import { ReactComponent as Telega } from "../../assets/img/telega.svg";
import { ReactComponent as Mail } from "../../assets/img/mail.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as Pointer } from "../../assets/img/pointer.svg";

const Header = () => {
  return (
    <div>
      <div className={S.header}>
        <div className={S.mb}></div>
        <div className={S.rowD}>
          <div className={S.row}>
            <a className={S.t} target={"_blank"} href={"https://t.me/PoloRioN"}>
              <Telega width={35} height={35} />
              Telegram
            </a>{" "}
            <a target={"_blank"} href={"mailto:noirolop@mail.ru"}>
              <Mail width={35} height={35} />
              noirolop@mail.ru
            </a>
            <div>
              <img className={S.logo} src={logo} alt="" />
            </div>{" "}
            <a target={"_blank"} href={"https://vk.com/id2043446"}>
              <Vk width={35} height={35} />
              ВКонтакте
            </a>
            <a target={"_blank"} href={"https://yandex.ru/maps/-/CCUVa2qRpB"}>
              <Pointer width={35} height={35} />
              Санкт-Петербург
            </a>
          </div>
        </div>
        <div className={S.name}>Лопатков Артём Дмитриевич</div>
        <div className={S.job}>Frontend-developer</div>
      </div>
    </div>
  );
};

export default Header;
