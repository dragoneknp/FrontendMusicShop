import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useError } from "../../Hooks/useError";
import { useLoading } from "../../Hooks/useLoading";
import { usePagination } from "../../Hooks/usePagination";
import { fetchAlbumCards } from "../../Store/ActionCreators/albumCardAction";
import { getAlbumCards } from "../../Store/selectors";
import DropDown from "../DropDown/dropDown";
import GridOfCards from "../GridOfCards/gridOfCards";
import Label from "../Label/label";
import Pagination from "../Pagination/pagination";
import "./marketplaceMainContent.scss";

const MarketplaceMainContent = () => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector(getAlbumCards);
    const [isGrid, changeGrid] = useState(true);
    const [load] = useLoading();
    const [
        currentPage,
        changeCurrentPage,
        getCountOfPages,
        handleNextClick,
        handlePrevClick,
        getCurrentPageData,
    ] = usePagination({
        countOfCards: cards.length,
        countOfCardsPerPage: isGrid ? 3 : 2,
        data: cards,
    });
    const currentPageData = getCurrentPageData();

    useEffect(() => {
        dispatch(fetchAlbumCards());
    }, [dispatch]);

    useError(error);

    const handleClick = () => {
        changeGrid(!isGrid);
        // changeCurrentPage(1);
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
                                {isGrid
                                    ? currentPageData.length > 3
                                        ? `1 - ${3}`
                                        : `1 - ${currentPageData.length}`
                                    : currentPageData.length > 2
                                    ? `1 - ${2}`
                                    : `1 - ${currentPageData.length}`}{" "}
                                items
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
                    {isGrid
                        ? load({
                              flag: isLoading,
                              component: (
                                  <GridOfCards
                                      cards={currentPageData}
                                      columns={3}
                                      rows={1}
                                      to="/marketplace"
                                  />
                              ),
                          })
                        : load({
                              flag: isLoading,
                              component: (
                                  <GridOfCards
                                      cards={currentPageData}
                                      columns={2}
                                      rows={1}
                                      to="/marketplace"
                                  />
                              ),
                          })}
                </section>
                <Pagination
                    countOfPages={getCountOfPages()}
                    currentPage={currentPage}
                    onNextClick={handleNextClick}
                    onPrevClick={handlePrevClick}
                />
            </div>
        </main>
    );
};

export default MarketplaceMainContent;
