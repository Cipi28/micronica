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
import {NotFound} from "../components/NotFound/index.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={`/micronica`} element={<App/>}>
                <Route path={`/micronica`} element={<Home/>}/>
                <Route path={`/micronica/about-us`} element={<AboutUs/>}/>
                <Route path={`/micronica/contact-us`} element={<ContactUs/>}/>
                <Route path={`/micronica/cnc-machining`} element={<CNCMach/>}/>
                <Route path={`/micronica/3d-printing`} element={<ThreeDPrinting/>}/>
                <Route path={`/micronica/injection-of-plastic-parts`} element={<InjectionPlastic/>}/>
                <Route path={`/micronica/laser-engraving`} element={<LaserEngraving/>}/>
                <Route path={`/micronica/tig-wig-mig-mag-welding`} element={<Weldings/>}/>
                <Route path={`/micronica/mechanical-pneumatic-hydraulic-devices-and-systems`} element={<DevAndSystems/>}/>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};