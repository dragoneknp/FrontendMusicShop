import React, { useEffect } from "react";
import { MarketPlaceCard, SellingCard } from "../../types/types";
import "./marketplaceListeningsMainContent.scss";
import DropDown from "../DropDown/dropDown";
import Label from "../Label/label";
import { formatPrice } from "../../utils/formatPrice";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchAlbumCardDetails } from "../../Store/ActionCreators/albumCardDetailsAction";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
const MarketplaceListeningsMainContent = () => {
    const { id } = useParams();
    const history = useNavigate();
    const dispatch = useAppDispatch();
    let { isLoading, error, card } = useAppSelector(
        (state) => state.albumCardDetails
    );
    useEffect(() => {
        dispatch(fetchAlbumCardDetails(id as string));
        const cleanUp = () => {
            isLoading = false;
            error = "";
        };
        return cleanUp();
    }, []);
    useEffect(() => {
        if (error !== "") {
            history("/error");
        }
    }, [error]);
    const SellingItem = (props: SellingCard) => {
        return (
            <div className="marketplaceListeningsMain-listOfSellingsNFTs__sellingItem">
                <div className="marketplaceListeningsMain-listOfSellingsNFTs__edition">
                    {props.edition}
                </div>
                <div className="marketplaceListeningsMain-listOfSellingsNFTs__price">
                    ${formatPrice(props.price)}
                </div>
                <div className="marketplaceListeningsMain-listOfSellingsNFTs__timeRemaining">
                    {props.timeRemaining}
                </div>
                <div className="marketplaceListeningsMain-listOfSellingsNFTs__token">
                    {props.token}
                </div>
                <div className="marketplaceListeningsMain-listOfSellingsNFTs__seller">
                    {props.seller}
                </div>
            </div>
        );
    };
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
                </section>
            </div>
        </main>
    );
};
export default MarketplaceListeningsMainContent;