import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import TermsMainContent from "../../Components/TermsMainContent/termsMainContent";
import ToTop from "../../Components/ToTop/toTop";
import "./terms.scss";
const Terms = () => {
    return (
        <div className="terms">
            <div className="terms__container">
                <ToTop />
                <Header />
                <TermsMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Terms;
