import React, { memo } from "react";
import "./gridOfCards.scss";
import Card from "../Card/card";
import { Card as ICard } from "../../types/types";
interface GridOfCardsProps {
    columns: number;
    rows: number;
    cards: ICard[];
    to: string;
}
const GridOfCards = (props: GridOfCardsProps) => {
    return (
        <div
            className="gridOfCards"
            style={{
                gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
                gridTemplateRows: `repeat(${props.rows}, 1fr)`,
            }}
        >
            {props.cards.slice(0, props.columns * props.rows).map((card) => {
                return <Card {...card} key={card.id} to={props.to}/>;
            })}
        </div>
    );
};
export default memo(GridOfCards);
