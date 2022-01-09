import React, { useState } from "react";
import "./header.scss";

const Header = () => {
    const [isActive, changeActive] = useState({
        Home: true,
        Discover: false,
        Marketplace: false,
    });
    const handleClick = (item: string) => {
        return () => {
            changeActive({
                Home: false,
                Discover: false,
                Marketplace: false,
                [item]: true,
            });
        };
    };
    return (
        <header className="header">
            <div className="header__container container">
                <ul className="header__menu header-menu">
                    <li
                        className={`header-menu__item ${
                            isActive.Home ? "active" : null
                        }`}
                        onClick={handleClick("Home")}
                    >
                        Home
                    </li>
                    <li
                        className={`header-menu__item ${
                            isActive.Discover ? "active" : null
                        }`}
                        onClick={handleClick("Discover")}
                    >
                        Discover
                    </li>
                    <li
                        className={`header-menu__item ${
                            isActive.Marketplace ? "active" : null
                        }`}
                        onClick={handleClick("Marketplace")}
                    >
                        Marketplace
                    </li>
                </ul>
                <div className="header__avatar">
                    <img src="#" alt="avatar" className="avatar__icon" />
                </div>
            </div>
        </header>
    );
};
export default Header;
