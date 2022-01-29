import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { loginUser } from "../../Store/ActionCreators/loginAction";
import { registerUser } from "../../Store/ActionCreators/registerAction";
import Input from "../Input/input";
import Label from "../Label/label";
import "./loginMainContent.scss";
const RegistrationInput = (props: {
    header: string;
    value: string;
    setValue: Function;
    type?: string;
}) => {
    return (
        <div className="loginMain-registration__input loginMain-registration-input">
            <div className="loginMain-registration-input__header">
                {props.header}
            </div>
            <Input {...props} />
        </div>
    );
};
const LoginMainContent = () => {
    const dispatch = useAppDispatch();

    const register = useAppSelector((store) => store.register);

    const login = useAppSelector((store) => store.login);

    const history = useNavigate();

    const handleRegisterClick = () => {
        const {
            firstName,
            lastName,
            emailAdress,
            phoneNumber,
            displayName,
            password,
        } = registerForm;
        if (
            firstName &&
            lastName &&
            emailAdress &&
            phoneNumber &&
            displayName &&
            password
        ) {
            dispatch(registerUser(registerForm));
        }
    };

    const handleLoginClick = () => {
        const { email, password } = loginForm;
        if (email && password) {
            dispatch(loginUser(loginForm));
        }
    };

    const [loginForm, changeLoginForm] = useState({
        email: "",
        password: "",
    });

    const [registerForm, changeRegisterForm] = useState({
        firstName: "",
        lastName: "",
        emailAdress: "",
        phoneNumber: "",
        displayName: "",
        password: "",
    });

    useEffect(() => {
        if (login.isLogin) {
            changeLoginForm({
                email: "",
                password: "",
            });
            history("/profile");
        }
    }, [login.isLogin]);

    useEffect(() => {
        if (register.isRegister) {
            changeRegisterForm({
                firstName: "",
                lastName: "",
                emailAdress: "",
                phoneNumber: "",
                displayName: "",
                password: "",
            });
        }
    }, [register.isRegister]);

    const handleChangeRegisterForm = (form: string) => {
        return (value: string) =>
            changeRegisterForm({ ...registerForm, [form]: value });
    };

    const handleChangeLoginForm = (form: string) => {
        return (value: string) => {
            changeLoginForm({ ...loginForm, [form]: value });
        };
    };
    return (
        <main className="loginMain">
            <Label
                header={"Login / Register Account"}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { title: "Login / Register" },
                ]}
            />
            <div className="loginMain__container container">
                <section className="loginMain__content">
                    <section className="loginMain__login loginMain-login">
                        <div className="loginMain-login__header">Login</div>
                        <div className="loginMain-login__form">
                            <div className="loginMain-login__email">
                                <Input
                                    header="Email..."
                                    value={loginForm.email}
                                    setValue={handleChangeLoginForm("email")}
                                />
                            </div>
                            <div className="loginMain-login__password">
                                <Input
                                    header="Password..."
                                    value={loginForm.password}
                                    setValue={handleChangeLoginForm("password")}
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="loginMain-login__footer">
                            <div className="loginMain-login__rememberMe">
                                <p>
                                    <input
                                        type="checkbox"
                                        className="loginMain-login__checkbox"
                                        id="loginCheckbox"
                                    />
                                    <label htmlFor="loginCheckbox">
                                        Remember me
                                    </label>
                                </p>
                            </div>
                            <div className="loginMain-login__forgotPassword">
                                <u>Forgot Password ?</u>
                            </div>
                        </div>
                        <div className="loginMain-login__button">
                            <button
                                className="loginMain-login__loginButton"
                                onClick={handleLoginClick}
                            >
                                Login
                            </button>
                        </div>
                    </section>
                    <section className="loginMain__registration loginMain-registration">
                        <div className="loginMain-registration__header">
                            Register (New Users)
                        </div>
                        <div className="loginMain-registration__form">
                            <RegistrationInput
                                header="First Name"
                                value={registerForm.firstName}
                                setValue={handleChangeRegisterForm("firstName")}
                            />
                            <RegistrationInput
                                header="Last Name"
                                value={registerForm.lastName}
                                setValue={handleChangeRegisterForm("lastName")}
                            />
                            <RegistrationInput
                                header="Email Adress"
                                value={registerForm.emailAdress}
                                setValue={handleChangeRegisterForm(
                                    "emailAdress"
                                )}
                            />
                            <RegistrationInput
                                header="Phone Number"
                                value={registerForm.phoneNumber}
                                setValue={handleChangeRegisterForm(
                                    "phoneNumber"
                                )}
                            />
                            <RegistrationInput
                                header="Display Name"
                                value={registerForm.displayName}
                                setValue={handleChangeRegisterForm(
                                    "displayName"
                                )}
                            />
                            <RegistrationInput
                                header="Password"
                                type="password"
                                value={registerForm.password}
                                setValue={handleChangeRegisterForm("password")}
                            />
                        </div>
                        <div className="loginMain-registration__footer">
                            <div className="loginMain-registration__addToMarketingList">
                                <p>
                                    <input
                                        type="checkbox"
                                        className="loginMain-registration__checkbox"
                                        id="registrationCheckbox"
                                    />
                                    <label htmlFor="registrationCheckbox">
                                        Add me to the marketing list
                                    </label>
                                </p>
                            </div>
                            <button
                                className="loginMain-registration__registerButton"
                                onClick={handleRegisterClick}
                            >
                                Register
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
};
export default LoginMainContent;
