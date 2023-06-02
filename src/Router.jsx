import HomePage from "./Page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./Page/Contact/ContactPage";
import RoadMapPage from "./Page/RoadMapPage/RoadMapPage";
import LeverdeFondPage from "./Page/Leverdefond/LeverdeFondPage";
// test






const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/roadmap" element={<RoadMapPage />} />
                <Route path="/lever-de-fond" element={<LeverdeFondPage/>} />



            </Routes>

        </BrowserRouter>
    )

}

export default Router