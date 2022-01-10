import React from "react";
import "./gridOfCards.scss";
import Card from "../Card/card";
interface ICard {
    performer: string;
    bidding: boolean;
    minBid: number;
    buyNow: number;
    picture: string;
    id: string;
}
interface GridOfCards {
    columns: number;
    rows: number;
    cards: ICard[];
}
const GridOfCards = (props: GridOfCards) => {
    return (
        <div
            className="gridOfCards"
            style={{
                gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
                gridTemplateRows: `repeat(${props.rows}, 1fr)`,
            }}
        >
            {props.cards.map((card) => {
                return <Card {...card} key={card.id} />;
            })}
        </div>
    );
};
export default GridOfCards;
