import React from "react";
import './TitleH1.scss'
import { Icon } from "../../icon/icon.jsx";

const TitleH1 = ({titleText}) => {

    return (
      <div className='title__wrapper'>
        <h1 className='title'>{titleText}</h1>
        <ul className='title__list '>
          <li className="title__item">
            <p className="item__text">Оставить заявку</p>
            <Icon className='ic' name='repair' width='40'/></li>
          <li className="title__item">
            <p className="item__text">Статус ремонта</p>
            <Icon className='ic' name='checkstatus' width='40'/></li>
        </ul>
      </div>
    )
}

export default TitleH1;