import React from 'react';

const Logo = (width, height, className, color) => {
    return (
        <svg
            className={className}
            width="97"
            height="51"
            fill={"none"}
            xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M36.57.593a1 1 0 0 0-1 1v4.274a1 1 0 0 0 1 1h36.327c10.127 0 18.08 7.797 18.08 17.89 0 .285.232.517.518.517h5.262a.517.517 0 0 0 .517-.517c0-13.49-10.842-24.164-24.377-24.164H36.57zM7.107 25.712a.438.438 0 0 0-.438-.438H1.164a.438.438 0 0 0-.438.438c0 13.65 10.223 24.92 23.443 25.657l42.341.037a1 1 0 0 0 1.001-1v-4.58a1 1 0 0 0-1-1H25.627c-10.237-.028-18.52-8.543-18.52-19.114z" fill="#6B7B84" stroke="#80949F" /><path d="M28.142 39.792c2.738 0 5.02-.532 7.273-1.627l.155-.145v-7.835l-.843 1.08c-1.622 1.773-3.801 2.749-6.266 2.749-4.592 0-9.203-2.968-9.203-8.64 0-4.287 3.18-8.842 9.041-8.842 1.17 0 4.014.276 6.424 2.836l.847 1.044v-7.8l-.148-.147c-2.296-1.15-4.638-1.71-7.308-1.71-4.567 0-8.132 1.203-10.97 3.674-1.8 1.549-4.803 5.02-4.803 10.863 0 4.321 1.538 7.695 4.826 10.622 3.058 2.682 6.45 3.878 10.974 3.878" fill="#6B7B84"/><path d="M28.142 39.792c2.738 0 5.02-.532 7.273-1.627l.155-.145v-7.835l-.843 1.08c-1.622 1.773-3.801 2.749-6.266 2.749-4.592 0-9.203-2.968-9.203-8.64 0-4.287 3.18-8.842 9.041-8.842 1.17 0 4.014.276 6.424 2.836l.847 1.044v-7.8l-.148-.147c-2.296-1.15-4.638-1.71-7.308-1.71-4.567 0-8.132 1.203-10.97 3.674-1.8 1.549-4.803 5.02-4.803 10.863 0 4.321 1.538 7.695 4.826 10.622 3.058 2.682 6.45 3.878 10.974 3.878" stroke="#80949F" /><path d="M47.911 17.289h1.365c1.251 0 2.677.068 3.757.804.527.376 1.412 1.248 1.412 2.831 0 1.17-.517 2.22-1.371 2.874-1.096.795-2.397.75-3.443.75h-1.72v-7.26zm3.066 12.529c3.231 0 5.76-.932 7.517-2.688 2.161-2.156 2.484-5.123 2.484-6.686 0-1.674-.397-4.937-3.057-7.3-2.18-1.911-4.507-2.389-7.789-2.389h-8.754v29.037h6.658v-9.974h2.941z" fill="#6B7B84"/><path d="M47.911 17.289v-.25h-.25v.25h.25zm5.122.804.145-.204-.004-.003-.141.207zm.04 5.705.147.203.006-.004-.152-.199zm-5.162.75h-.25v.25h.25v-.25zm10.583 2.582-.176-.177.176.177zm-.573-13.986.166-.187-.001-.002-.165.188zm-16.543-2.389v-.25h-.25v.25h.25zm0 29.037h-.25v.25h.25v-.25zm6.658 0v.25h.25v-.25h-.25zm0-9.974v-.25h-.25v.25h.25zm-.125-12.28h1.365v-.5H47.91v.5zm1.365 0c1.257 0 2.608.074 3.616.761l.282-.413c-1.151-.784-2.653-.847-3.898-.847v.5zm3.612.758c.487.349 1.307 1.153 1.307 2.628h.5c0-1.691-.95-2.63-1.517-3.035l-.29.407zm1.307 2.628c0 1.096-.484 2.07-1.274 2.676l.305.397c.918-.704 1.469-1.828 1.469-3.073h-.5zm-1.268 2.672c-1.018.738-2.23.701-3.296.701v.5c1.026 0 2.417.055 3.59-.796l-.294-.405zm-3.296.701h-1.72v.5h1.72v-.5zm-1.47.25V17.29h-.5v7.258h.5zm2.816 5.52c3.28 0 5.88-.946 7.694-2.76l-.353-.354c-1.699 1.698-4.158 2.615-7.341 2.615v.5zm7.694-2.76c2.232-2.228 2.557-5.278 2.557-6.863h-.5c0 1.542-.321 4.424-2.41 6.509l.353.354zm2.557-6.863c0-1.702-.402-5.054-3.14-7.487l-.333.373c2.581 2.293 2.973 5.468 2.973 7.114h.5zm-3.142-7.488c-2.246-1.969-4.644-2.45-7.954-2.45v.5c3.255 0 5.51.472 7.624 2.325l.33-.375zm-7.954-2.45h-8.754v.5h8.754v-.5zm-9.004.25v29.036h.5V10.755h-.5zm.25 29.286h6.658v-.5h-6.658v.5zm6.908-.25v-9.974h-.5v9.974h.5zm-.25-9.724h2.941v-.5h-2.94v.5z" fill="#80949F"/><path d="M80.953 24.469c-1.448-1.283-3.468-2.027-5.762-2.798-1.634-.568-2.535-.882-3.135-1.429-.474-.402-.685-.839-.685-1.416 0-1.264.86-2.615 3.27-2.615 1.64 0 3.011.701 4.079 2.082l.424.548 3.516-4.475-.32-.322c-2.151-2.152-4.985-3.289-8.196-3.289-6.478 0-9.378 4.215-9.378 8.392 0 2.241.8 4.049 2.37 5.37 1.408 1.206 3.124 1.882 4.77 2.434l.185.061c1.462.483 2.974.983 3.876 1.791.629.578.908 1.205.908 2.034 0 1.9-1.496 3.177-3.723 3.177-1.76 0-4.079-.863-5.305-3.284l-.32-.635-4.371 4.046.258.365c1.394 1.974 4.54 5.286 9.945 5.286 5.96 0 10.123-3.831 10.123-9.317 0-3.138-1.377-5-2.529-6.006" fill="#6B7B84"/><path d="M80.953 24.469c-1.448-1.283-3.468-2.027-5.762-2.798-1.634-.568-2.535-.882-3.135-1.429-.474-.402-.685-.839-.685-1.416 0-1.264.86-2.615 3.27-2.615 1.64 0 3.011.701 4.079 2.082l.424.548 3.516-4.475-.32-.322c-2.151-2.152-4.985-3.289-8.196-3.289-6.478 0-9.378 4.215-9.378 8.392 0 2.241.8 4.049 2.37 5.37 1.408 1.206 3.124 1.882 4.77 2.434l.185.061c1.462.483 2.974.983 3.876 1.791.629.578.908 1.205.908 2.034 0 1.9-1.496 3.177-3.723 3.177-1.76 0-4.079-.863-5.305-3.284l-.32-.635-4.371 4.046.258.365c1.394 1.974 4.54 5.286 9.945 5.286 5.96 0 10.123-3.831 10.123-9.317 0-3.138-1.377-5-2.529-6.006" stroke="#80949F" /></svg>

    )
}

export { Logo };