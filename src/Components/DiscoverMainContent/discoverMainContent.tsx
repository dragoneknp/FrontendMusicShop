import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useBreakPoints } from "../../Hooks/useBreakPoints";
import { useError } from "../../Hooks/useError";
import { useLoading } from "../../Hooks/useLoading";
import { usePagination } from "../../Hooks/usePagination";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { fetchCards } from "../../Store/ActionCreators/cardAction";
import { getCards } from "../../Store/selectors";
import { Filters } from "../../types/types";
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
    const [filter, changeFilter] = useState<Filters>("all");
    useEffect(() => {
        dispatch(fetchCards(filter));
    }, [dispatch, filter]);
    const { width } = useWindowDimensions();

    const [
        currentPage,
        changeCurrentPage,
        getCountOfPages,
        handleNextClick,
        handlePrevClick,
        getCurrentPageData,
    ] = usePagination({
        countOfCards: cards.length,
        countOfCardsPerPage:
            useBreakPoints({
                1120: 4,
                767: 3,
                520: 2,
                320: 1,
            }) * (isGrid ? 4 : 3),
        data: cards,
    });

    useError(error);

    const handleClick = () => {
        changeGrid(!isGrid);
        changeCurrentPage(1);
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
                                    defaultValue="All"
                                    values={[
                                        "Video",
                                        "Audio",
                                        "Artwork",
                                        "All",
                                    ]}
                                    setValue={(value) => {
                                        changeFilter(value as Filters);
                                        changeCurrentPage(1);
                                    }}
                                />
                            </div>
                            {width >= 767 && (
                                <div className="discoverMain-sorts__results">
                                    Showing{" "}
                                    {isGrid
                                        ? getCurrentPageData().length > 12
                                            ? `1 - ${4 * 3}`
                                            : `1 - ${
                                                  getCurrentPageData().length
                                              }`
                                        : getCurrentPageData().length > 4
                                        ? `1 - ${4 * 2}`
                                        : `1 - ${
                                              getCurrentPageData().length
                                          }`}{" "}
                                    items
                                </div>
                            )}
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
                    {load({
                        flag: isLoading,
                        component: (
                            <GridOfCards
                                cards={getCurrentPageData()}
                                columns={useBreakPoints({
                                    1120: 4,
                                    767: 3,
                                    520: 2,
                                    320: 1,
                                })}
                                rows={isGrid ? 3 : 2}
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
