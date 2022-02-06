import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { logout } from "../../Store/ActionCreators/logoutAction";
import "./header.scss";

const Header = ({ headerRef } : any) => {
    const dispatch = useAppDispatch();
    const { isLogin } = useAppSelector((store) => store.login);

    const location = useLocation();

    const [isActive, changeActive] = useState({
        Home: false,
        Discover: false,
        Marketplace: false,
    });
    const [isOpen, changeOpen] = useState(false);

    const handleClick = () => {
        changeOpen(!isOpen);
    };

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (location.pathname !== "/") {
            changeActive({
                Home: false,
                Discover: false,
                Marketplace: false,
                [location.pathname[1].toUpperCase() +
                location.pathname.slice(2)]: true,
            });
        } else {
            changeActive({
                Home: true,
                Discover: false,
                Marketplace: false,
            });
        }
    }, [location]);

    return (
        <header className="header" ref={headerRef}>
            <div className="header__container container">
                <ul className="header__menu header-menu">
                    <li
                        className={`header-menu__item ${
                            isActive.Home ? "active" : ""
                        }`}
                    >
                        <Link to="/home" className="header-menu__item_link">
                            Home
                        </Link>
                    </li>
                    <li
                        className={`header-menu__item ${
                            isActive.Discover ? "active" : ""
                        }`}
                    >
                        <Link to="/discover" className="header-menu__item_link">
                            Discover
                        </Link>
                    </li>
                    <li
                        className={`header-menu__item ${
                            isActive.Marketplace ? "active" : ""
                        }`}
                    >
                        <Link
                            to="/marketplace"
                            className="header-menu__item_link"
                        >
                            Marketplace
                        </Link>
                    </li>
                </ul>
                <div className="header__avatar" onClick={handleClick}>
                    <img
                        src="/Images/avatar.svg"
                        alt="avatar"
                        className="avatar__icon"
                    />
                    <div
                        className={`header__dropdown ${isOpen ? "active" : ""}`}
                    >
                        {isLogin ? (
                            <ul className="header__dropdown-menu">
                                <li className="header__dropdown-menu__item">
                                    <Link
                                        to="/profile"
                                        className="header__dropdown-menu__item_link"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li className="header__dropdown-menu__item">
                                    <Link
                                        to="/home"
                                        className="header__dropdown-menu__item_link"
                                        onClick={handleLogoutClick}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="header__dropdown-menu">
                                <li className="header__dropdown-menu__item">
                                    <Link
                                        to="/login"
                                        className="header__dropdown-menu__item_link"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
