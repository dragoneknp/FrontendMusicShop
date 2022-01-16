import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/scrollToTop";
import "./index.css";
import About from "./Pages/About/about";
import Discover from "./Pages/Discover/discover";
import Error from "./Pages/Error/error";
import FAQ from "./Pages/FAQ/faq";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Marketplace from "./Pages/Marketplace/marketplace";
import MarketplaceListenings from "./Pages/MarketplaceListenings/marketplaceListenings";
import Terms from "./Pages/Terms/terms";

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/discover" element={<Discover />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route
                path="/marketplace/:id"
                element={<MarketplaceListenings />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/error" element={<Error />} />
            <Route path="/about" element={<About />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);
