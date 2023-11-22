import React from "react";
import './Technique.scss'
import {Icon} from "../../icon/icon.jsx";

const Technique = () => {
    const ShowMore = (btn) => {
        document.querySelectorAll('.technique__list').forEach((btn) => {
            btn.classList.toggle('open');
        })
    }

    return (
        <section className='technique'>
            <h2 className="technique__title">Ремонт техники различных брендов</h2>
            <ul className="technique__list">
                <li className="technique__item">
                    <p className="technique__description">Ремонт ноутбуков</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт планшетов</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт ПК</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт мониторов</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт смартфонов</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт роутеров</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
                <li className="technique__item">
                    <p className="technique__description">Ремонт телефонов</p>
                    <Icon name='arrow' width='40' height='40'/>
                </li>
            </ul>
            <span className="technique__showMore" onClick={ShowMore}><Icon name='expland' />Показать все</span>
        </section>
  )
}

export default Technique;