import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./error.scss";
import ErrorMainContent from "../../Components/ErrorMainContent/errorMainContent";
const Error = () => {
    return (
        <div className="error">
            <div className="error__container">
                <Header />
                <ErrorMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Error;
