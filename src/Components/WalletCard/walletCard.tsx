import { WalletCardProps } from "../../types/types";
import "./walletCard.scss";
const WalletCard = ({
    count,
    picture,
    description,
    editionOf,
    header,
}: WalletCardProps) => {
    return (
        <div className="walletCard">
            <div className="walletCard__image">
                <img src={picture} />
            </div>
            <div className="walletCard__content">
                <div className="walletCard__header">{header}</div>
                <div className="walletCard__editionOf">
                    Edition of {editionOf}
                </div>
                <div className="walletCard__description">{description}</div>
                <div className="walletCard__footer">
                    <button className="walletCard__button">View tokens</button>
                    <div className="walletCard__countOfTokens">
                        {count === 1
                            ? `You own ${count}x token`
                            : `You own ${count}x tokens`}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WalletCard;
