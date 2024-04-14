import HomePage from "./Page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./Page/Contact/ContactPage";
import RoadMapPage from "./Page/RoadMapPage/RoadMapPage";
import LeverdeFondPage from "./Page/Leverdefond/LeverdeFondPage";
import FaqPage from "./Page/FAQ/Faq";
import MentionLegale from "./Page/MentionsLegale/MentionLegale";
import PolitiqueConfi from "./Page/PolitiqueDeconfidentialite/PolitiqueDeconfidentialite";
// test
const Router = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/roadmap" element={<RoadMapPage />} />
                <Route path="/FAQ" element={<FaqPage />} />
                <Route path="/MentionLégales" element={<MentionLegale />} />
                <Route path="/PolitiqueConfidentialite" element={<PolitiqueConfi/>} />
                <Route path="/lever-de-fond" element={<LeverdeFondPage/>} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router