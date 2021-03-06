import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { loginUser } from "../../Store/ActionCreators/loginAction";
import { registerUser } from "../../Store/ActionCreators/registerAction";
import { getLogin, getRegister } from "../../Store/selectors";
import {
    isEmailValid,
    isNameValid,
    isNumberValid,
    isPasswordValid,
} from "../../utils/formValidators";
import Input from "../Input/input";
import Label from "../Label/label";
import "./loginMainContent.scss";
import RegistrationInput from "./RegistrationInput/registrationInput";

const LoginMainContent = () => {
    const [isRemembered, changeRemembered] = useState(false);
    const dispatch = useAppDispatch();
    const register = useAppSelector(getRegister);
    const login = useAppSelector(getLogin);
    const history = useNavigate();
    const [loginForm, changeLoginForm] = useState({
        displayName: "",
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
            isNameValid(firstName) &&
            isNameValid(lastName) &&
            isEmailValid(emailAdress) &&
            isNumberValid(phoneNumber) &&
            isNameValid(displayName) &&
            isPasswordValid(password)
        ) {
            dispatch(registerUser(registerForm));
        }
    };

    const handleLoginClick = () => {
        const { displayName, password } = loginForm;
        if (isNameValid(displayName) && isPasswordValid(password)) {
            dispatch(loginUser({ ...loginForm, isRemembered }));
        }
    };

    const handleRememberClick = () => {
        changeRemembered(!isRemembered);
    };

    useEffect(() => {
        if (login.isLogin) {
            changeLoginForm({
                displayName: "",
                password: "",
            });
            history("/profile");
        }
    }, [login.isLogin, history]);

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
                                    header="Display name"
                                    value={loginForm.displayName}
                                    setValue={handleChangeLoginForm(
                                        "displayName"
                                    )}
                                    checkValid={isNameValid}
                                />
                            </div>
                            <div className="loginMain-login__password">
                                <Input
                                    header="Password"
                                    value={loginForm.password}
                                    setValue={handleChangeLoginForm("password")}
                                    type="password"
                                    checkValid={isPasswordValid}
                                />
                            </div>
                        </div>
                        {login.error && (
                            <span className="loginMain__alert">
                                Login or Password is incorrect
                            </span>
                        )}
                        <div className="loginMain-login__footer">
                            <div className="loginMain-login__rememberMe">
                                <p>
                                    <input
                                        type="checkbox"
                                        className="loginMain-login__checkbox"
                                        id="loginCheckbox"
                                        onClick={handleRememberClick}
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
                                checkValid={isNameValid}
                            />
                            <RegistrationInput
                                header="Last Name"
                                value={registerForm.lastName}
                                setValue={handleChangeRegisterForm("lastName")}
                                checkValid={isNameValid}
                            />
                            <RegistrationInput
                                header="Email Adress"
                                value={registerForm.emailAdress}
                                setValue={handleChangeRegisterForm(
                                    "emailAdress"
                                )}
                                checkValid={isEmailValid}
                            />
                            <RegistrationInput
                                header="Phone Number"
                                value={registerForm.phoneNumber}
                                setValue={handleChangeRegisterForm(
                                    "phoneNumber"
                                )}
                                checkValid={isNumberValid}
                            />
                            <RegistrationInput
                                header="Display Name"
                                value={registerForm.displayName}
                                setValue={handleChangeRegisterForm(
                                    "displayName"
                                )}
                                checkValid={isNameValid}
                            />
                            <RegistrationInput
                                header="Your Password"
                                type="password"
                                value={registerForm.password}
                                setValue={handleChangeRegisterForm("password")}
                                checkValid={isPasswordValid}
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
