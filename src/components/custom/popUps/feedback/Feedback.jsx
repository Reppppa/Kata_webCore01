import React from "react";
import './Feedback.scss'
import { Icon } from "../../../icon/icon.jsx";

const Feedback = ({activeFeedback, setActiveFeedback}) => {

    return (
        <div className={activeFeedback ? 'feedback open' : 'feedback'} onClick={() => setActiveFeedback(!activeFeedback)}>
            <div className="feedback__overlay">
                <div className="feedback__inner" onClick={e => e.stopPropagation()}>
                    <div className='feedback__ic' onClick={() => setActiveFeedback(!activeFeedback)}><Icon className='ic' name='close' width='40' /></div>
                    <h2 className="feedback__title">Обратная связь</h2>
                    <form action="" className="feedback__form form">
                            <input type="name" className="form__field" placeholder='Имя'/>
                            <input type="number" className="form__field" placeholder='Телефон'/>
                            <input type="email" className="form__field" placeholder='Электронная почта'/>
                            <textarea className="form__field message" placeholder='Сообщение'/>
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

export default Feedback;