import React from "react";
import "./home.scss";
import Header from "../../Components/Header/header";
import Banner from "../../Components/Banner/banner";
import Footer from "../../Components/Footer/footer";
import MainContent from "../../Components/HomeMainContent/mainContent";
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Header />
                <Banner />
                <MainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Home;
