import React, { memo } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Card as CardProps } from "../../types/types";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({
    performer,
    bidding = undefined,
    minBid = undefined,
    buyNow = undefined,
    currentBid = undefined,
    picture,
    id,
    album = undefined,
    availableListenings = undefined,
    to = undefined,
}: CardProps) => {
    return (
        <div className="card">
            <div className="card__picture">
                <img src={picture} alt="Artist" />
            </div>
            <div className="card__header">{performer}</div>
            {(bidding && minBid && currentBid && (
                <div className="card__minBid">
                    <span className="card__label_bold">current bid </span>$
                    {formatPrice(currentBid.toString())}
                </div>
            )) ||
                (bidding && minBid && (
                    <div className="card__minBid">
                        <span className="card__label_bold">min bid </span>$
                        {formatPrice(minBid.toString())}
                    </div>
                ))}
            {buyNow && (
                <div className="card__buyNow">
                    <span className="card__label_bold">buy now </span>$
                    {formatPrice(buyNow.toString())}
                </div>
            )}
            {availableListenings && (
                <div className="card__buyNow">
                    <span className="card__label_bold">
                        Available listenings :{" "}
                    </span>
                    {availableListenings}
                </div>
            )}
            <Link to={`${to}/${id}`}>
                <button className="card__button">
                    {album ? <p>View all listenings</p> : <p>View details</p>}
                </button>
            </Link>
        </div>
    );
};

export default memo(Card);
