import React from "react";
import './Footer.scss'

const Footer = () => {

    return (
        <footer className='footer'>
            <ul className="footer__inner">
                <li className="footer__item">
                    <p>© 2019 CPS<br/> Разработано командой Apesong</p>
                </li>
                <li className="footer__item">
                    <p className='footer__link'>Политика конфиденциальности</p>
                </li>
                <li className="footer__item">
                    <p>Информация, размещенная на данной странице, не является публичной офертой</p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;