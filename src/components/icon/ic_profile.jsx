import React from "react";

const Profile = ( {width, height, className, color} ) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#FF3E79"/>
            <path d="M20.5 19C22.9853 19 25 16.9853 25 14.5C25 12.0147 22.9853 10 20.5 10C18.0147 10 16 12.0147 16 14.5C16 16.9853 18.0147 19 20.5 19Z" fill="white"/>
            <path d="M10.0166 26.6118C9.88693 27.3412 10.5352 28 11.339 28H28.6604C29.4902 28 30.1125 27.3412 29.9829 26.6118C29.2309 22.4 25.0561 20 19.9997 20C14.9433 20 10.7686 22.4 10.0166 26.6118Z" fill="white"/>
        </svg>

    )
}

export { Profile };