import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import MarketplaceMainContent from "../../Components/MarketplaceMainContent/marketplaceMainContent";
import ToTop from "../../Components/ToTop/toTop";
import "./marketplace.scss";
const Marketplace = () => {
    return (
        <div className="marketplace">
            <div className="marketplace__container">
                <ToTop />
                <Header />
                <MarketplaceMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Marketplace;
