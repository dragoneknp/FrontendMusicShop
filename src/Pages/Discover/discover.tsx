import React, { useEffect, useState } from "react";
import DiscoverMainContent from "../../Components/DiscoverMainContent/discoverMainContent";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import ToTop from "../../Components/ToTop/toTop";
import "./discover.scss";
const Discover = () => {
    return (
        <div className="discover">
            <div className="discover__container">
                <ToTop />
                <Header />
                <DiscoverMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Discover;
