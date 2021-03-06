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

const GridOfCards = ({ columns, rows, to, cards }: GridOfCardsProps) => {
    return (
        <div
            className="gridOfCards"
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${
                    cards.length / columns >= rows
                        ? rows
                        : cards.length / columns
                }, 1fr)`,
            }}
        >
            {cards
                .slice(
                    0,
                    columns *
                        (cards.length / columns >= rows
                            ? rows
                            : cards.length / columns)
                )
                .map((card) => {
                    return <Card {...card} key={card.id} to={to} />;
                })}
        </div>
    );
};

export default memo(GridOfCards);
