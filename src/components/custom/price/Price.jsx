import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './Price.scss'
import { Icon } from "../../icon/icon.jsx";

const Price = () => {
  return (
      <section className='price'>
          <h2 className="price__title">Цены на услуги</h2>

          <div className="price__list mobile">
              <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={'auto'}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Тестирование с выдачей технического заключения</p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">Бесплатно</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Замена дисплея<br/><br/></p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">1 000 ₽</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Замена полифонического динамика</p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">1 000 ₽</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Тестирование с выдачей технического заключения</p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">1 000 ₽</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Тестирование с выдачей технического заключения</p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">1 000 ₽</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="price__item">
                          <span className='price__span'>Ремонтные услуги</span>
                          <p className="price__description">Замена программного обеспечения</p>
                          <span className='price__span'>Цена</span>
                          <p className="price__description">1 000 ₽</p>
                          <span className='price__span'>Срок</span>
                          <p className="price__description">30-120 мин</p>
                          <button className="price__btn btn">Заказать<Icon name='arrowRight' color='white'/></button>
                      </div>
                  </SwiperSlide>
              </Swiper>
          </div>
          <table className="table">
              <thead>
                  <tr className='table_header'>
                      <td className='table__article'>Ремонтные услуги</td>
                      <td className='table__article'>Цена</td>
                      <td colSpan={2} className='table__article'>Срок</td>
                  </tr>
              </thead>
              <tbody>
                  <tr className='table__column'>
                      <td className='table__item'>Диагностика</td>
                      <td className='table__item'>Бесплатно</td>
                      <td className='table__item'>30 мин</td>
                      <td className='table__item'><button className="table__btn btn">Заказать<Icon name='arrowRight' color='white'/></button></td>
                  </tr>
                  <tr className='table__column'>
                      <td className='table__item'>Замена дисплея</td>
                      <td className='table__item'>1 000 ₽</td>
                      <td className='table__item'>30-120 мин</td>
                      <td className='table__item'><button className="table__btn btn">Заказать<Icon name='arrowRight' color='white'/></button></td>
                  </tr>
                  <tr className='table__column'>
                      <td className='table__item'>Замена полифонического динамика</td>
                      <td className='table__item'>1 000 ₽</td>
                      <td className='table__item'>30-120 мин</td>
                      <td className='table__item'><button className="table__btn btn">Заказать<Icon name='arrowRight' color='white'/></button></td>
                  </tr>
                  <tr className='table__column'>
                      <td className='table__item'>Тестирование с выдачей технического заключения</td>
                      <td className='table__item'>1 000 ₽</td>
                      <td className='table__item'>30-120 мин</td>
                      <td className='table__item'><button className="table__btn btn">Заказать<Icon name='arrowRight' color='white'/></button></td>
                  </tr>
                  <tr className='table__column'>
                      <td className='table__item'>Замена программного обеспечения</td>
                      <td className='table__item'>1 000 ₽</td>
                      <td className='table__item'>30-120 мин</td>
                      <td className='table__item'><button className="table__btn btn">Заказать<Icon name='arrowRight' color='white'/></button></td>
                  </tr>
              </tbody>
          </table>
            <div className="price__footer">
                <p className="price__text">
                    Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу.
                    Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
                </p>
                <span className="price__getQuote">Получить коммерческое предложение<Icon name='arrowRight' color='#FF3E79'/></span>
            </div>
      </section>
  )
}

export default Price;