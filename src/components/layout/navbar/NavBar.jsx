import React from "react";
import './NavBar.scss';
import { Icon } from "../../icon/icon.jsx";

const NavBar = ({setActiveMenu, activeMenu}) => {

    return (
          <div className={activeMenu ? 'navbar active' : 'navbar'} onClick={() => setActiveMenu(!activeMenu)}>
              <div className="navbar__overlay"/>
              <div className="navbar__inner" onClick={e => e.stopPropagation()}>
                  <div className="navbar__header">
                      <div className="navbar__item" onClick={() => setActiveMenu(!activeMenu)}><Icon className='ic close desktop' name='close' width='40' height='40' /></div>
                      <div className="navbar__item"><Icon className='logo' name='logo' /></div>
                      <div className="navbar__item"><Icon className='ic search' name='search' width='40' height='40' /></div>
                  </div>
                  <nav className='navbar__nav'>
                      <ul className="nav__list">
                          <li className="nav__item">
                              <a href="#" className="nav__link">Ремонт техники</a>
                          </li>
                          <li className="nav__item select">
                              <a href="#" className="nav__link">Услуги и сервисы</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Корпоративным клиентам</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Продавцам техники</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Партнерам</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Производителям</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Наши сервисные центры</a>
                          </li>
                          <li className="nav__item">
                              <a href="#" className="nav__link">Контакты</a>
                          </li>
                      </ul>
                  </nav>
                  <div className="navbar__contacts">
                      <div className="contact__list">
                          <div className="contact__item"><Icon className='ic' name='call' width='40' height='40' /></div>
                          <div className="contact__item"><Icon className='ic' name='chat' width='40' height='40' /></div>
                          <div className="contact__item"><Icon className='ic' name='profile' width='40' height='40' /></div>
                      </div>
                      <p className="mail">mail@cps.com</p>
                      <p className="phone">8 800 890 8900</p>
                      <ul className="language-switcher">
                          <li className='ru'>Ru</li>
                          <li className='en'>En</li>
                          <li className='ch'>Ch</li>
                      </ul>
                  </div>
              </div>
          </div>
    )
}

export default NavBar ;