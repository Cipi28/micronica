import {Route, Routes} from "react-router-dom";
import App from "../App";
import {Home} from "../components/Home";
import {AboutUs} from "../components/AboutUs/index.jsx";
import {ContactUs} from "../components/ContactUs/index.jsx";
import {CNCMach} from "../components/CNCMach/index.jsx";
import {ThreeDPrinting} from "../components/ThreeDPrinting/index.jsx";
import {InjectionPlastic} from "../components/InjectionPlastic/index.jsx";
import {LaserEngraving} from "../components/LaserEngraving/index.jsx";
import {Weldings} from "../components/Weldings/index.jsx";
import {DevAndSystems} from "../components/DevAndSystems/index.jsx";

export const AppRoutes = () => {
    console.log("FFFF", import.meta.env.BASE_URL);
    return (
        <Routes>
            <Route path={import.meta.env.BASE_URL} element={<App/>}>
                <Route path={import.meta.env.BASE_URL} element={<Home/>}/>
                <Route path={`${import.meta.env.BASE_URL}/about-us`} element={<AboutUs/>}/>
                <Route path={`${import.meta.env.BASE_URL}/contact-us`} element={<ContactUs/>}/>
                <Route path={`${import.meta.env.BASE_URL}/cnc-machining`} element={<CNCMach/>}/>
                <Route path={`${import.meta.env.BASE_URL}/3d-printing`} element={<ThreeDPrinting/>}/>
                <Route path={`${import.meta.env.BASE_URL}/injection-of-plastic-parts`} element={<InjectionPlastic/>}/>
                <Route path={`${import.meta.env.BASE_URL}/laser-engraving`} element={<LaserEngraving/>}/>
                <Route path={`${import.meta.env.BASE_URL}/tig-wig-mig-mag-welding`} element={<Weldings/>}/>
                <Route path={`${import.meta.env.BASE_URL}/mechanical-pneumatic-hydraulic-devices-and-systems`} element={<DevAndSystems/>}/>
            </Route>
        </Routes>
    );
};