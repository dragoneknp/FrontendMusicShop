import React from "react";
import Header from "../../Components/Header/header";
import Label from "../../Components/Label/label";
import Footer from "../../Components/Footer/footer";
import "./login.scss";
import LoginMainContent from "../../Components/LoginMainContent/loginMainContent";
const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <Header />
                <LoginMainContent />
                <Footer />
            </div>
        </div>
    );
};
export default Login;
