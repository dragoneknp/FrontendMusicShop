import { SellingCard } from "../../../types/types";
import { formatPrice } from "../../../utils/formatPrice";
import "./sellingItem.scss";

const SellingItem = ({
    edition,
    price,
    timeRemaining,
    token,
    seller,
}: SellingCard) => {
    return (
        <div className="marketplaceListeningsMain-listOfSellingsNFTs__sellingItem">
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__edition">
                {edition}
            </div>
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__price">
                ${formatPrice(price)}
            </div>
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__timeRemaining">
                {timeRemaining}
            </div>
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__token">
                {token}
            </div>
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__seller">
                {seller}
            </div>
        </div>
    );
};

export default SellingItem;
