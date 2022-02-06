import React, { useEffect } from "react";
import { NFTTypes } from "../../types/types";
import "./cardDetailsMainContent.scss";
import Label from "../Label/label";
import { formatPrice } from "../../utils/formatPrice";
import { useLocation, useParams } from "react-router-dom";
import Slider from "../Slider/slider";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchCardDetails } from "../../Store/ActionCreators/cardDetailsAction";
import Loader from "../Loader/loader";
import { useError } from "../../Hooks/useError";

const CardDetailsMainContent = () => {
    const location = useLocation();
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const data = useAppSelector((state) => state.cardDetails);
    let { isLoading, error, cardDetails } = data;

    useEffect(() => {
        dispatch(fetchCardDetails(id as string));
    }, [dispatch, id]);

    useError(error);

    return (
        <main className="cardDetailsMain">
            <Label
                header={cardDetails.performer}
                breadCrumbs={[
                    {
                        path: `/${location.pathname.split("/")[1]}`,
                        title: `${
                            location.pathname.split("/")[1][0].toUpperCase() +
                            location.pathname.split("/")[1].slice(1)
                        }`,
                    },
                    { title: cardDetails.performer },
                ]}
            />
            <div className="cardDetailsMain__container container">
                <section className="cardDetailsMain__content">
                    {isLoading ? (
                        <div style={{ textAlign: "center" }}>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <section className="cardDetailsMain__card">
                                <section className="cardDetailsMain__slider">
                                    <Slider pictures={cardDetails.pictures} />
                                </section>
                                <section className="cardDetailsMain__information cardDetailsMain-information">
                                    <div className="cardDetailsMain-information__title">
                                        {cardDetails.performer}
                                    </div>
                                    <div className="cardDetailsMain-information__subtitle">
                                        {cardDetails.header}
                                    </div>
                                    <div className="cardDetailsMain-information__timeRemaining">
                                        Time Remaining:{" "}
                                        {cardDetails.timeRemaining}
                                    </div>
                                    <div className="cardDetailsMain-information__price">
                                        Buy Now: $
                                        {cardDetails.buyNow
                                            ? formatPrice(
                                                  cardDetails.buyNow?.toString()
                                              )
                                            : null}
                                    </div>
                                    <button className="cardDetailsMain-information__button">
                                        Register/ Login to buy/ BID
                                    </button>
                                    <div className="cardDetailsMain-information__collectionId">
                                        <span>Collection id</span>
                                        {cardDetails.collectionId}
                                    </div>
                                    <div className="cardDetailsMain-information__editionOf">
                                        <span>Edition Of</span>
                                        {cardDetails.editionOf}
                                    </div>
                                </section>
                            </section>
                            <section className="cardDetailsMain__details cardDetailsMain-details">
                                <div className="cardDetailsMain-details__title">
                                    Details
                                </div>
                                <div className="cardDetailsMain-details__description">
                                    {cardDetails.description}
                                </div>
                                <div className="cardDetailsMain-details__information cardDetailsMain-details-information">
                                    <div className="cardDetailsMain-details__collection">
                                        <div className="cardDetailsMain-details-information__label">
                                            Collection:
                                        </div>
                                        <div className="cardDetailsMain-details-information__value">
                                            {cardDetails.collectionId}
                                        </div>
                                    </div>
                                    <div className="cardDetailsMain-details__editionOf">
                                        <div className="cardDetailsMain-details-information__label">
                                            Edition Of
                                        </div>
                                        <div className="cardDetailsMain-details-information__value">
                                            {cardDetails.editionOf}
                                        </div>
                                    </div>
                                    <div className="cardDetailsMain-details__type">
                                        <div className="cardDetailsMain-details-information__label">
                                            Type
                                        </div>
                                        <div className="cardDetailsMain-details-information__value">
                                            {NFTTypes[cardDetails.type]}
                                        </div>
                                    </div>
                                    <div className="cardDetailsMain-details__creator">
                                        <div className="cardDetailsMain-details-information__label">
                                            Creator
                                        </div>
                                        <div className="cardDetailsMain-details-information__value">
                                            {cardDetails.creator}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </section>
            </div>
        </main>
    );
};

export default CardDetailsMainContent;
