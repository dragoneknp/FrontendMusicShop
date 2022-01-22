import React from "react";
import { CardDetails, NFTTypes } from "../../types/types";
import "./cardDetailsMainContent.scss";
import Label from "../Label/label";
import { formatPrice } from "../../utils/formatPrice";
import { useLocation } from "react-router-dom";
import Slider from "../Slider/slider";
const CardDetailsMainContent = (props: CardDetails) => {
    const location = useLocation();
    console.log();
    return (
        <main className="cardDetailsMain">
            <Label
                header={props.performer}
                breadCrumbs={[
                    {
                        path: `/${location.pathname.split("/")[1]}`,
                        title: `${
                            location.pathname.split("/")[1][0].toUpperCase() +
                            location.pathname.split("/")[1].slice(1)
                        }`,
                    },
                    { title: props.performer },
                ]}
            />
            <div className="cardDetailsMain__container container">
                <section className="cardDetailsMain__content">
                    <section className="cardDetailsMain__card">
                        <section className="cardDetailsMain__slider">
                            <Slider pictures={props.pictures} />
                        </section>
                        <section className="cardDetailsMain__information cardDetailsMain-information">
                            <div className="cardDetailsMain-information__title">
                                {props.performer}
                            </div>
                            <div className="cardDetailsMain-information__subtitle">
                                {props.header}
                            </div>
                            <div className="cardDetailsMain-information__timeRemaining">
                                Time Remaining: {props.timeRemaining}
                            </div>
                            <div className="cardDetailsMain-information__price">
                                Buy Now: $
                                {props.buyNow
                                    ? formatPrice(props.buyNow?.toString())
                                    : null}
                            </div>
                            <button className="cardDetailsMain-information__button">
                                Register/ Login to buy/ BID
                            </button>
                            <div className="cardDetailsMain-information__collectionId">
                                <span>Collection id</span>
                                {props.collectionId}
                            </div>
                            <div className="cardDetailsMain-information__editionOf">
                                <span>Edition Of</span>
                                {props.editionOf}
                            </div>
                        </section>
                    </section>
                    <section className="cardDetailsMain__details cardDetailsMain-details">
                        <div className="cardDetailsMain-details__title">
                            Details
                        </div>
                        <div className="cardDetailsMain-details__description">
                            {props.description}
                        </div>
                        <div className="cardDetailsMain-details__information cardDetailsMain-details-information">
                            <div className="cardDetailsMain-details__collection">
                                <div className="cardDetailsMain-details-information__label">
                                    Collection:
                                </div>
                                <div className="cardDetailsMain-details-information__value">
                                    {props.collectionId}
                                </div>
                            </div>
                            <div className="cardDetailsMain-details__editionOf">
                                <div className="cardDetailsMain-details-information__label">
                                    Edition Of
                                </div>
                                <div className="cardDetailsMain-details-information__value">
                                    {props.editionOf}
                                </div>
                            </div>
                            <div className="cardDetailsMain-details__type">
                                <div className="cardDetailsMain-details-information__label">
                                    Type
                                </div>
                                <div className="cardDetailsMain-details-information__value">
                                    {NFTTypes[props.type]}
                                </div>
                            </div>
                            <div className="cardDetailsMain-details__creator">
                                <div className="cardDetailsMain-details-information__label">
                                    Creator
                                </div>
                                <div className="cardDetailsMain-details-information__value">
                                    {props.creator}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
};
export default CardDetailsMainContent;
