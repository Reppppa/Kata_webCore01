import React from "react";

const Call = ({width, height, className, color}) => {
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
            <path d="M12.7602 23.25L15.3002 22.96C15.9102 22.89 16.5102 23.1 16.9402 23.53L18.7802 25.37C21.6102 23.93 23.9302 21.62 25.3702 18.78L23.5202 16.93C23.0902 16.5 22.8802 15.9 22.9502 15.29L23.2402 12.77C23.3602 11.76 24.2102 11 25.2302 11H26.9602C28.0902 11 29.0302 11.94 28.9602 13.07C28.4302 21.61 21.6002 28.43 13.0702 28.96C11.9402 29.03 11.0002 28.09 11.0002 26.96V25.23C10.9902 24.22 11.7502 23.37 12.7602 23.25Z" fill="white"/>
        </svg>
    )
}

export { Call };