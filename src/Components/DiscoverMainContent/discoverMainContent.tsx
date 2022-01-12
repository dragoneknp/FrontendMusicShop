import React, { useState } from "react";
import { cards } from "../../mock/mock";
import BreadCrumbs from "../BreadCrumbs/breadCrumbs";
import DropDown from "../DropDown/dropDown";
import GridOfCards from "../GridOfCards/gridOfCards";
import Label from "../Label/label";
import "./discoverMainContent.scss";
const DiscoverMainContent = () => {
    const [isGrid, changeGrid] = useState(true);

    const handleClick = () => {
        changeGrid(!isGrid);
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
                                Showing 1-12 items
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
                    {isGrid ? (
                        <GridOfCards cards={cards} columns={4} rows={3} />
                    ) : (
                        <GridOfCards cards={cards} columns={2} rows={2} />
                    )}
                </section>
                <div className="discoverMain__pagination discoverMain-pagination">
                    <div className="discoverMain-pagination__prevPage">
                        PREV
                    </div>
                    <div className="discoverMain-pagination__countOfPages">
                        Page 1 of 1
                    </div>
                    <div className="discoverMain-pagination__nextPage">
                        NEXT
                    </div>
                </div>
            </div>
        </main>
    );
};
export default DiscoverMainContent;
