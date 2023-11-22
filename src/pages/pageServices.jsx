import React from "react";
import './pageServices.scss'
import Services from "../components/custom/services/Services.jsx";
import Brands from "../components/custom/brands/Brands.jsx";
import Technique from "../components/custom/technique/Technique.jsx";

const PageServices = () => {
    return (
        <div className='container'>
            <Services />
            <Brands />
            <Technique />
        </div>
    )
}

export default PageServices;