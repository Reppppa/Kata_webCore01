import React, {useEffect, useState} from 'react';
import './styles/index.scss';
import Header       from "./components/layout/header/Header.jsx";
import Footer       from "./components/layout/footer/Footer.jsx";
import PageServices from "./pages/pageServices.jsx";
import NavBar       from "./components/layout/navbar/NavBar.jsx";
import TitleH1      from "./components/custom/titleH1/TitleH1.jsx";
import Feedback     from "./components/custom/popUps/feedback/Feedback.jsx";
import Callback     from "./components/custom/popUps/callback/Callback.jsx";

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [feedbackActive, setFeedbackActive] = useState(false);
    const [callbackActive, setCallbackActive] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            const isDesktop = window.matchMedia("(min-width: 1366px)").matches;
            setMenuActive(isDesktop);
        }
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        }
    }, []);

    return (

        <div className='content'>

            <NavBar activeMenu={menuActive} setActiveMenu={setMenuActive} />
            <Header
                activeMenu={menuActive} setActiveMenu={setMenuActive}
                activeFeedback={feedbackActive} setActiveFeedback={setFeedbackActive}
                activeCallback={callbackActive} setActiveCallback={setCallbackActive}
            />

            <Feedback activeFeedback={feedbackActive} setActiveFeedback={setFeedbackActive}/>
            <Callback activeCallback={callbackActive} setActiveCallback={setCallbackActive}/>

            <main className='main'>

                <TitleH1 titleText={"Услуги и сервис"}
                         activeFeedback={feedbackActive} setActiveFeedback={setFeedbackActive}
                         activeCallback={callbackActive} setActiveCallback={setCallbackActive}
                />

                <PageServices />

                <Footer />

            </main>

        </div>

    )
}

export default App;