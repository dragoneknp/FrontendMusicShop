import React, { useRef } from "react";
import Banner from "../../Components/Banner/banner";
import HomeMainContent from "../../Components/HomeMainContent/homeMainContent";
import PageLayout from "../../Layout/pageLayout";

const Home = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <PageLayout page={"home"}>
            <Banner reference={ref} />
            <HomeMainContent reference={ref} />
        </PageLayout>
    );
};

export default Home;
