import React, { useEffect } from "react";
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './Technique.scss';
import { Icon } from "../../icon/icon.jsx";

const Technique = () => {
    const ShowMore = (btn) => {
        document.querySelectorAll('.technique__list').forEach((btn) => {
            btn.classList.toggle('open');
        })
    }

    return (
        <section className='technique'>
            <h2 className="technique__title">Ремонт техники различных брендов</h2>
            <div className="technique__list">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт ноутбуков</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт планшетов</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт ПК</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт мониторов</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт смартфонов</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт роутеров</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="technique__item">
                            <p className="technique__description">Ремонт телефонов</p>
                            <Icon name='arrow' width='40' height='40'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <span className="technique__showMore" onClick={ShowMore}><Icon name='expland' />Показать все</span>
        </section>
  )
}

export default Technique;