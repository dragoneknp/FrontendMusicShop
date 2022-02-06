import React from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import ToTop from "../Components/ToTop/toTop";

interface Layout {
    children: React.ReactNode;
    page: string;
}

const PageLayout = (props: Layout) => {
    return (
        <div className={props.page}>
            <div className={`${props.page}__container`}>
                <ToTop />
                <Header />
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
