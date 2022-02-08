import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useError } from "../../Hooks/useError";
import { useLoading } from "../../Hooks/useLoading";
import { usePagination } from "../../Hooks/usePagination";
import { fetchCards } from "../../Store/ActionCreators/cardAction";
import { getCards } from "../../Store/selectors";
import DropDown from "../DropDown/dropDown";
import GridOfCards from "../GridOfCards/gridOfCards";
import Label from "../Label/label";
import Pagination from "../Pagination/pagination";
import "./discoverMainContent.scss";

const DiscoverMainContent = () => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector(getCards);
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
        countOfCardsPerPage: isGrid ? 12 : 4,
        data: cards,
    });
    const currentPageData = getCurrentPageData();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    useError(error);

    const handleClick = () => {
        changeGrid(!isGrid);
        // changeCurrentPage(1);
    };

    return (
        <main className="discoverMain">
            <Label
                header={"Browse NFTs"}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { title: "Discover" },
                ]}
            />
            <div className="discoverMain__container container">
                <section className="discoverMain__content">
                    <div className="discoverMain__filters">
                        <div className="discoverMain__sorts discoverMain-sorts">
                            <div className="discoverMain-sorts__label">
                                Sort by:
                            </div>
                            <div className="discoverMain-sorts__select">
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
                            <div className="discoverMain-sorts__results">
                                Showing{" "}
                                {isGrid
                                    ? currentPageData.length > 12
                                        ? `1 - ${4 * 3}`
                                        : `1 - ${currentPageData.length}`
                                    : currentPageData.length > 4
                                    ? `1 - ${2 * 2}`
                                    : `1 - ${currentPageData.length}`}{" "}
                                items
                            </div>
                        </div>
                        <div className="discoverMain__grid">
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
                                      columns={4}
                                      rows={3}
                                      to="/discover"
                                  />
                              ),
                          })
                        : load({
                              flag: isLoading,
                              component: (
                                  <GridOfCards
                                      cards={currentPageData}
                                      columns={2}
                                      rows={2}
                                      to="/discover"
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

export default DiscoverMainContent;
