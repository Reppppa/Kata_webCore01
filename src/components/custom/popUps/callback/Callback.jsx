import React from "react";
import './Callback.scss'
import { Icon } from "../../../icon/icon.jsx";

const Callback = ({activeCallback, setActiveCallback}) => {

    return (
        <div className={activeCallback ? 'callback open' : 'callback'} onClick={() => setActiveCallback(!activeCallback)}>
            <div className="callback__overlay">
                <div className="callback__inner" onClick={e => e.stopPropagation()}>
                    <div className='callback__ic' onClick={() => setActiveCallback(!activeCallback)}><Icon className='ic' name='close' width='40' /></div>
                    <h2 className="callback__title">Заказать звонок</h2>
                    <form action="" className="callback__form form">
                            <input type="number" className="form__field" placeholder='Телефон'/>
                        <div className="form__description">
                            Нажимая “отправить”, вы даете согласие на
                            <a href='' className='form__link'> обработку персональных данных </a> и соглашаетесь с нашей
                            <a href='' className="form__link"> политикой конфиденциальности</a></div>
                        <button className="form__btn btn">Отправить<Icon name='arrowRight' widht='24' color='white'/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Callback;