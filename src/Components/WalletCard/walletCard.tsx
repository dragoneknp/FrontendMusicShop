import { Link } from "react-router-dom";
import { WalletCardProps } from "../../types/types";
import "./walletCard.scss";

const WalletCard = ({
    count,
    picture,
    description,
    editionOf,
    header,
    id,
}: WalletCardProps) => {
    return (
        <div className="walletCard">
            <div className="walletCard__image">
                <img src={picture} alt="Author" />
            </div>
            <div className="walletCard__content">
                <div className="walletCard__header">{header}</div>
                <div className="walletCard__editionOf">
                    Edition of {editionOf}
                </div>
                <div className="walletCard__description">{description}</div>
                <div className="walletCard__footer">
                    <Link to={`/discover/${id}`}>
                        <button className="walletCard__button">
                            View tokens
                        </button>
                    </Link>
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
