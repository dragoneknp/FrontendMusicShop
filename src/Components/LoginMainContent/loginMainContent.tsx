import React, { ChangeEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { loginUser } from "../../Store/ActionCreators/loginAction";
import { registerUser } from "../../Store/ActionCreators/registerAction";
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
            <input
                type={props.type ? props.type : "text"}
                className="loginMain-registration-input__input"
                value={props.value}
                onChange={(event) => props.setValue(event.target.value)}
                placeholder={props.header}
            />
        </div>
    );
};
const LoginMainContent = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector((store) => store.register);
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
                                <input
                                    type="text"
                                    className="loginMain-login__emailInput"
                                    placeholder="Email..."
                                    value={loginForm.email}
                                    onChange={(event) =>
                                        handleChangeLoginForm("email")(
                                            event?.target.value
                                        )
                                    }
                                ></input>
                            </div>
                            <div className="loginMain-login__password">
                                <input
                                    type="password"
                                    className="loginMain-login__passwordInput"
                                    placeholder="Password..."
                                    value={loginForm.password}
                                    onChange={(event) =>
                                        handleChangeLoginForm("password")(
                                            event?.target.value
                                        )
                                    }
                                ></input>
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
