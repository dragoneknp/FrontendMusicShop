import React, { useRef } from "react";
import "./home.scss";
import Header from "../../Components/Header/header";
import Banner from "../../Components/Banner/banner";
import Footer from "../../Components/Footer/footer";
import HomeMainContent from "../../Components/HomeMainContent/homeMainContent";
import ToTop from "../../Components/ToTop/toTop";
const Home = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div className="home">
            <div className="home__container">
                <ToTop />
                <Header />
                <Banner reference={ref} />
                <HomeMainContent reference={ref} />
                <Footer />
            </div>
        </div>
    );
};
export default Home;
