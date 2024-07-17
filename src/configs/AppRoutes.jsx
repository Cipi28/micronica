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
    return (
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact-us"} element={<ContactUs/>}/>
                <Route path={"/cnc-machining"} element={<CNCMach/>}/>
                <Route path={"/3d-printing"} element={<ThreeDPrinting/>}/>
                <Route path={"/injection-of-plastic-parts"} element={<InjectionPlastic/>}/>
                <Route path={"/laser-engraving"} element={<LaserEngraving/>}/>
                <Route path={"/tig-wig-mig-mag-welding"} element={<Weldings/>}/>
                <Route path={"/mechanical-pneumatic-hydraulic-devices-and-systems"} element={<DevAndSystems/>}/>
            </Route>
        </Routes>
    );
};