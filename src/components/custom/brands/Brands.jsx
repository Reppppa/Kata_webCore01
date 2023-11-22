import React from "react";
import './Brands.scss'
import lenovo from '../../../assets/img/brand_Lenovo.png';
import acer from '../../../assets/img/brand_Acer.png';
import apple from '../../../assets/img/brand_Apple.png';
import bosch from '../../../assets/img/brand_Bosch.png';
import hp from '../../../assets/img/brand_HP.png';
import samsung from '../../../assets/img/brand_Samsung.png';
import sony from '../../../assets/img/brand_Sony.png';
import vs from '../../../assets/img/brand_ViewSonic.png';
import google from '../../../assets/img/brand_Google.png';
import hooli from '../../../assets/img/brand_Hooli.jpeg';
import { Icon } from "../../icon/icon.jsx";

const Brands = () => {
    const ShowMore = (btn) => {
        document.querySelectorAll('.brands__list').forEach((btn) => {
            btn.classList.toggle('open');
        })
    }

    return (
      <section className='brands'>
          <h2 className="brands__title">Ремонт техники различных брендов</h2>
          <ul className="brands__list">
              <li className="brands__item">
                  <img src={lenovo} alt="Логотип Lenovo" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={samsung} alt="Логотип Samsung" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={apple} alt="Логотип Apple" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={bosch} alt="Логотип Bosch" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={hp} alt="Логотип HP" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={acer} alt="Логотип Acer" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={sony} alt="Логотип Sony" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={vs} alt="Логотип VS" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={google} alt="Логотип VS" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
              <li className="brands__item">
                  <img src={hooli} alt="Логотип VS" className="brands__img"/><Icon className='icon' name='arrow' width='40' height='40'/>
              </li>
          </ul>
          <span className="brands__showMore" onClick={ShowMore}><Icon name='expland' />Показать все</span>
      </section>
  )
}

export default Brands;