import React, {useState} from "react";
import './Services.scss';
import { Icon } from "../../icon/icon.jsx";
import image from '../../../assets/img/img_services.png';

const Services = () => {

    const HandleClick = () => {

    }

    const addActive = (item) => {

        document.querySelectorAll('.sideBar__item').forEach((tab) => {
            tab.classList.remove('active');

        }); item.currentTarget.classList.add('active');

        const contents = document.querySelectorAll('.sideBar__content')
    }

    const ReadMore = (text, btn) => {
        document.querySelectorAll('.sideBar__text').forEach((btn) => {
            btn.classList.toggle('open');
        })
    }

    return (
        <>
            <section className='sideBar'>
                <ul className="sideBar__list">
                        <li id='1' className='sideBar__item active' onClick={addActive}>Ремонтируемые устройства</li>
                        <li id='2' className='sideBar__item' onClick={addActive}>Дополнительные услуги</li>
                        <li id='3' className='sideBar__item' onClick={addActive}>Цены на услуги</li>
                        <li id='4' className='sideBar__item' onClick={addActive}>Адреса сервисных центров</li>
                        <li id='5' className='sideBar__item' onClick={addActive}>Специальные цены</li>
                        <li id='5' className='sideBar__item' onClick={addActive}>Отзывы</li>
                </ul>
                    <div className="sideBar__content active">
                        <div id='1' className="sideBar__description">
                            <p className="sideBar__text">
                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                                <br/>
                                <br/>
                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                            </p>
                            <span className="sideBar__readMore" onClick={ReadMore}><Icon name='expland' />Читать далее</span>
                        </div>
                            <img src={image} alt="Фото услуги" className="sideBar__image"/>
                    </div>
                    <div id='2' className="sideBar__content">
                        <div className="sideBar__description">
                            <p className="sideBar__text">
                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                                <br/>
                                <br/>
                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                            </p>
                            <span className="sideBar__readMore" onClick={ReadMore}><Icon name='expland' />Читать далее</span>
                        </div>
                        <img src={image} alt="Фото услуги" className="sideBar__image"/>
                    </div>
                    <div id='3' className="sideBar__content">
                        <div className="sideBar__description">
                            <p className="sideBar__text">
                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                                <br/>
                                <br/>
                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                            </p>
                            <span className="sideBar__readMore" onClick={ReadMore}><Icon name='expland' />Читать далее</span>
                        </div>
                        <img src={image} alt="Фото услуги" className="sideBar__image"/>
                    </div>
                    <div id='4' className="sideBar__content">
                        <div className="sideBar__description">
                            <p className="sideBar__text">
                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                                <br/>
                                <br/>
                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                            </p>
                            <span className="sideBar__readMore" onClick={ReadMore}><Icon name='expland' />Читать далее</span>
                        </div>
                        <img src={image} alt="Фото услуги" className="sideBar__image"/>
                    </div>
                    <div id='5' className="sideBar__content">
                        <div className="sideBar__description">
                            <p className="sideBar__text">
                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                                <br/>
                                <br/>
                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                            </p>
                            <span className="sideBar__readMore" onClick={ReadMore}><Icon name='expland' />Читать далее</span>
                        </div>
                        <img src={image} alt="Фото услуги" className="sideBar__image"/>
                    </div>
            </section>
        </>
    )
}

export default Services;
