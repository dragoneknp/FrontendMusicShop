import React from "react";
import "./card.scss";
interface ICard {
    performer: string;
    bidding: boolean;
    minBid: number;
    buyNow: number;
    picture: string;
    id: string;
}
const Card = (props: ICard) => {
    const getPriceWithComma = (price: string): string => {
        price = price.split("").reverse().join("");
        let newString: string = "";
        let index = 1;
        for (let char of price) {
            if (index % 3 === 0) {
                newString += char;
                newString += ",";
            } else {
                newString += char;
            }

            index++;
        }
        return newString.split("").reverse().join("");
    };
    return (
        <div className="card">
            <div className="card__picture">
                <img src={props.picture} alt="picture" />
            </div>

            <div className="card__header">{props.performer}</div>
            {props.bidding && (
                <div className="card__minBid">
                    <span className="card__label_bold">min bid </span>$
                    {getPriceWithComma(props.minBid.toString())}.00
                </div>
            )}
            <div className="card__buyNow">
                <span className="card__label_bold">buy now </span>$
                {getPriceWithComma(props.buyNow.toString())}.00
            </div>
            <button className="card__button">
                <p>View details</p>
            </button>
        </div>
    );
};
export default Card;
