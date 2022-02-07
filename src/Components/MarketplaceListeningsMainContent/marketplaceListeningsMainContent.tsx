import React, { useEffect } from "react";
import { SellingCard } from "../../types/types";
import "./marketplaceListeningsMainContent.scss";
import DropDown from "../DropDown/dropDown";
import Label from "../Label/label";
import { formatPrice } from "../../utils/formatPrice";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchAlbumCardDetails } from "../../Store/ActionCreators/albumCardDetailsAction";
import { useParams } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import { useError } from "../../Hooks/useError";
import { getAlbumCardDetails } from "../../Store/selectors";
import { useLoading } from "../../Hooks/useLoading";

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

const MarketplaceListeningsMainContent = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { isLoading, error, card } = useAppSelector(getAlbumCardDetails);
    const [load] = useLoading();

    useEffect(() => {
        dispatch(fetchAlbumCardDetails(id as string));
    }, [dispatch, id]);

    useError(error);

    return (
        <main className="marketplaceListeningsMain">
            <Label
                header={card.performer}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { path: "/marketplace", title: "Marketplace" },
                    { title: card.performer },
                ]}
            />
            <div className="marketplaceListeningsMain__container container">
                <section className="marketplaceListeningsMain__content">
                    {load({
                        flag: isLoading,
                        component: (
                            <>
                                <div className="marketplaceListeningsMain__card marketplaceListeningsMain-card">
                                    <section className="marketplaceListeningsMain-card__image">
                                        <img src={card.picture} alt="Artist" />
                                    </section>
                                    <section className="marketplaceListeningsMain-card__content">
                                        <div className="marketplaceListeningsMain-card__header">
                                            {card.performer}
                                        </div>
                                        <div className="marketplaceListeningsMain-card__album">
                                            {card.album}
                                        </div>
                                        <div className="marketplaceListeningsMain-card__description">
                                            {card.description}
                                        </div>
                                        <div className="marketplaceListeningsMain-card__sorts marketplaceListeningsMain-card-sorts">
                                            <div className="marketplaceListeningsMain-card-sorts__label">
                                                Sort by:
                                            </div>
                                            <div className="marketplaceListeningsMain-card-sorts__select">
                                                <DropDown
                                                    defaultValue="Popularity"
                                                    values={[
                                                        "Video",
                                                        "Audio",
                                                        "Artwork",
                                                        "Popularity",
                                                    ]}
                                                />
                                            </div>
                                            <div className="marketplaceListeningsMain-card-sorts__results">
                                                Showing 1-12 items
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="marketplaceListeningsMain__listOfSellingsNFTs marketplaceListeningsMain-listOfSellingsNFTs">
                                    <div className="marketplaceListeningsMain-listOfSellingsNFTs__headers">
                                        <div className="marketplaceListeningsMain-listOfSellingsNFTs__edition">
                                            Edition
                                        </div>
                                        <div className="marketplaceListeningsMain-listOfSellingsNFTs__price">
                                            Price
                                        </div>
                                        <div className="marketplaceListeningsMain-listOfSellingsNFTs__timeRemaining">
                                            Time Remaining
                                        </div>
                                        <div className="marketplaceListeningsMain-listOfSellingsNFTs__token">
                                            Token
                                        </div>
                                        <div className="marketplaceListeningsMain-listOfSellingsNFTs__seller">
                                            Seller
                                        </div>
                                    </div>
                                    {card.sellingCards?.map((item) => (
                                        <SellingItem key={uuid4()} {...item} />
                                    ))}
                                </div>
                            </>
                        ),
                    })}
                </section>
            </div>
        </main>
    );
};

export default MarketplaceListeningsMainContent;
