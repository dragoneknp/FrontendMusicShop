import React, { memo, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./footer.scss";

const Footer = () => {
    const onFormClick = (event: SyntheticEvent) => event.preventDefault();

    const { width } = useWindowDimensions();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__subscribe footer-subscribe">
                    <div className="footer-subscribe__header">
                        Enter your email to subscribe to our newsletter
                    </div>
                    <form
                        className="footer-subscribe__form"
                        onClick={onFormClick}
                    >
                        <input
                            className="footer-subscribe__input"
                            placeholder="Your email"
                        />
                        <button className="footer-subscribe__subscribeButton"></button>
                    </form>
                </div>

                <div className="footer__topics">
                    {width >= 767 && (
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
                    )}
                    {width >= 991 && (
                        <div className="footer__topic footer-topic">
                            <div className="footer-topic__header">
                                Mobile App
                            </div>
                            <div className="footer-topic__content">
                                <div className="footer-topic__app footer-topic-app">
                                    <div className="footer-topic-app__appStore"></div>
                                    <div className="footer-topic-app__googlePlay"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">About</div>
                        <div className="footer-topic__content">
                            <ul className="footer-topic__list">
                                <li className="footer-topic__listItem">
                                    <Link to="/about">
                                        about this marketplace
                                    </Link>
                                </li>
                                <li className="footer-topic__listItem">
                                    <Link to="/FAQ">
                                        frequently asked questions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__topic footer-topic">
                        <div className="footer-topic__header">Legalese</div>
                        <div className="footer-topic__content">
                            <li className="footer-topic__listItem">
                                <Link to="/terms">terms</Link>
                            </li>
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
                        ??2021 Beatiful Music. All rights reserved
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

export default memo(Footer);
