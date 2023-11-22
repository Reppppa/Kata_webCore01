import React, {useEffect, useState} from 'react';
import './styles/index.scss';
import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import PageServices from "./pages/pageServices.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import TitleH1 from "./components/custom/titleH1/TitleH1.jsx";

const App = () => {
    const [navBarIsOpen, setNavBarIsOpen] = useState(false)

    useEffect(() => {
        const checkScreenWidth = () => {
            const isDesktop = window.matchMedia("(min-width: 1366px)").matches;
            setNavBarIsOpen(isDesktop);
        }
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        }
    }, []);

    return (

        <div className='content'>

            {navBarIsOpen && <Navbar setNavBarIsOpen={setNavBarIsOpen} />}
            <Header setNavBarIsOpen={setNavBarIsOpen} />

            <main className='main'>

                <TitleH1 titleText={"Услуги и сервис"}/>

                <PageServices />

                <Footer />

            </main>

        </div>

    )
}

export default App;