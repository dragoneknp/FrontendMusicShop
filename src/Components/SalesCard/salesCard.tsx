import { FC } from "react";
import { SalesCardProps } from "../../types/types";
import { formatPrice } from "../../utils/formatPrice";
import "./salesCard.scss";

const SalesCard: FC<SalesCardProps> = ({
    picture,
    proceeds,
    purchasedBy,
    header,
    editionOf,
    date,
    collectionId,
}) => {
    return (
        <div className="salesCard">
            <div className="salesCard__section">
                <div className="salesCard__image">
                    <img src={picture} alt="Author" />
                </div>
                <div className="salesCard__description">
                    <div className="salesCard__header">{header}</div>
                    <div className="salesCard__collectionId">
                        {collectionId}
                    </div>
                    <div className="salesCard__purchasedBy">
                        Purchased by {purchasedBy}
                    </div>
                </div>
            </div>

            <div className="salesCard__date">{date}</div>
            <div className="salesCard__edition">{editionOf}</div>
            <div className="salesCard__proceeds">
                ${formatPrice(proceeds.toString())}
            </div>
        </div>
    );
};
export default SalesCard;
