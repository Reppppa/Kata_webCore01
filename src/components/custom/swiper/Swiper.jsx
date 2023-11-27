import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './Technique.scss';
import React, {useEffect} from "react";


useEffect(() => {
    const checkScreenWidth = () => {
        const isDesktop = window.matchMedia("(max-width: 768px)").matches;
        Swiper = swiper.disable()
    }
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
        window.removeEventListener('resize', checkScreenWidth);
    }
}, []);