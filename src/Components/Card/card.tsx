import React, { memo } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Card as CardProps } from "../../types/types";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = (props: CardProps) => {
    console.log(`${props.to}/${props.id}`);
    return (
        <div className="card">
            <div className="card__picture">
                <img src={props.picture} alt="Artist" />
            </div>

            <div className="card__header">{props.performer}</div>
            {props.bidding && props.minBid && (
                <div className="card__minBid">
                    <span className="card__label_bold">min bid </span>$
                    {formatPrice(props.minBid.toString())}
                </div>
            )}
            {props.buyNow && (
                <div className="card__buyNow">
                    <span className="card__label_bold">buy now </span>$
                    {formatPrice(props.buyNow.toString())}
                </div>
            )}
            {props.availableListenings && (
                <div className="card__buyNow">
                    <span className="card__label_bold">
                        Available listenings :{" "}
                    </span>
                    {props.availableListenings}
                </div>
            )}

            <button className="card__button">
                <Link to={`${props.to}/${props.id}`}>
                    {props.album ? (
                        <p>View all listenings</p>
                    ) : (
                        <p>View details</p>
                    )}
                </Link>
            </button>
        </div>
    );
};
export default memo(Card);
