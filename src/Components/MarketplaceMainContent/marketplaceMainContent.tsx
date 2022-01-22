import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchAlbumCards } from "../../Store/ActionCreators/albumCardAction";
import DropDown from "../DropDown/dropDown";
import GridOfCards from "../GridOfCards/gridOfCards";
import Label from "../Label/label";
import Loader from "../Loader/loader";
import "./marketplaceMainContent.scss";
const MarketplaceMainContent = () => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector(
        (state) => state.albumCard
    );
    useEffect(() => {
        dispatch(fetchAlbumCards());
    }, []);
    const [isGrid, changeGrid] = useState(true);

    const handleClick = () => {
        changeGrid(!isGrid);
    };
    return (
        <main className="marketplaceMain">
            <Label
                header={"Browse NFTs"}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { title: "Marketplace" },
                ]}
            />
            <div className="marketplaceMain__container container">
                <section className="marketplaceMain__content">
                    <div className="marketplaceMain__filters">
                        <div className="marketplaceMain__sorts marketplaceMain-sorts">
                            <div className="marketplaceMain-sorts__label">
                                Sort by:
                            </div>
                            <div className="marketplaceMain-sorts__select">
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
                            <div className="marketplaceMain-sorts__results">
                                Showing 1-3 items
                            </div>
                        </div>
                        <div className="marketplaceMain__grid">
                            <img
                                src="/Images/menu.svg"
                                alt="menu"
                                className={`${isGrid ? "active" : ""}`}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                    {isGrid ? (
                        isLoading ? (
                            <Loader />
                        ) : (
                            <GridOfCards
                                cards={cards}
                                columns={3}
                                rows={1}
                                to="/marketplace"
                            />
                        )
                    ) : isLoading ? (
                        <Loader />
                    ) : (
                        <GridOfCards
                            cards={cards}
                            columns={3}
                            rows={1}
                            to="/marketplace"
                        />
                    )}
                </section>
                <div className="marketplaceMain__pagination marketplaceMain-pagination">
                    <div className="marketplaceMain-pagination__prevPage">
                        PREV
                    </div>
                    <div className="marketplaceMain-pagination__countOfPages">
                        Page 1 of 1
                    </div>
                    <div className="marketplaceMain-pagination__nextPage">
                        NEXT
                    </div>
                </div>
            </div>
        </main>
    );
};
export default MarketplaceMainContent;
