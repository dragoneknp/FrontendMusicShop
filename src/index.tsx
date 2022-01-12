import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import "./index.css";
import Discover from "./Pages/Discover/discover";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Marketplace from "./Pages/Marketplace/marketplace";
import Terms from "./Pages/Terms/terms";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/discover" element={<Discover />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);
