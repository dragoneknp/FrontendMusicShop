import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./about.scss";
import AboutMainContent from "../../Components/AboutMainContent/aboutMainContent";
import ToTop from "../../Components/ToTop/toTop";
const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <ToTop />
                <Header />
                <AboutMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default About;
