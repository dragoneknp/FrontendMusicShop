import React from "react";
import "./footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__subscribe footer-subscribe">
                    <div className="footer-subscribe__header">
                        Enter your email to subscribe to our newsletter
                    </div>
                    <form className="footer-subscribe__form">
                        <input
                            className="footer-subscribe__input"
                            placeholder="Your email"
                        />
                        <button className="footer-subscribe__subscribeButton"></button>
                    </form>
                </div>
                <div className="footer__topics">
                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">Connect</div>
                        <div className="footer-topic__content">
                            <a
                                href="dragoneknp@gmail.com"
                                className="footer-topic__email"
                            >
                                dragoneknp@gmail.com
                            </a>
                            <div className="footer-topic-socialNetworks footer-topic__socialNetworks">
                                <div className="footer-topic-socialNetworks__telegram"></div>
                                <div className="footer-topic-socialNetworks__twitter"></div>
                                <div className="footer-topic-socialNetworks__instagram"></div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">Mobile App</div>
                        <div className="footer-topic__content">
                            <div className="footer-topic__app footer-topic-app">
                                <div className="footer-topic-app__appStore"></div>
                                <div className="footer-topic-app__googlePlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">About</div>
                        <div className="footer-topic__content">
                            <ul className="footer-topic__list">
                                <li className="footer-topic__listItem">
                                    about this marketplace
                                </li>
                                <li className="footer-topic__listItem">
                                    frequently asked questions
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">Legalese</div>
                        <div className="footer-topic__content">
                            <li className="footer-topic__listItem">terms</li>
                            <li className="footer-topic__listItem">privacy</li>
                            <li className="footer-topic__listItem">
                                returns & refunds
                            </li>
                            <li className="footer-topic__listItem">
                                taxes & fees
                            </li>
                        </div>
                    </div>
                </div>
                <div className="footer__rights footer-rights">
                    <div className="footer-rights__header">
                        ©2021 Curios Music. All rights reserved
                    </div>
                    <div className="footer-rights__icons">
                        <img
                            src="/images/rightsIcons.svg"
                            alt="rightsIcons"
                            className="footer-rights__icon"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
