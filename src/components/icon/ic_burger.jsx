import React from "react";

const Burger = ( {width, height, className, color} ) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="40" rx="20" fill="#FF3E79"/>
            <path d="M11 13C11 12.4477 11.4477 12 12 12H28C28.5523 12 29 12.4477 29 13C29 13.5523 28.5523 14 28 14H12C11.4477 14 11 13.5523 11 13ZM11 20C11 19.4477 11.4477 19 12 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H12C11.4477 21 11 20.5523 11 20ZM12 26C11.4477 26 11 26.4477 11 27C11 27.5523 11.4477 28 12 28H24C24.5523 28 25 27.5523 25 27C25 26.4477 24.5523 26 24 26H12Z" fill="white"/>
        </svg>

    )
}

export { Burger };