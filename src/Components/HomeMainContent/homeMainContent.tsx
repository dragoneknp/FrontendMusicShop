import React, { useState } from "react";
import GridOfCards from "../GridOfCards/gridOfCards";
import { cards } from "../../mock/mock";
import "./homeMainContent.scss";
const HomeMainContent = () => {
    const [isActive, changeActive] = useState({
        All: true,
        Audio: false,
        Artwork: false,
        Video: false,
    });
    const handleClick = (item: string) => {
        return () => {
            changeActive({
                All: false,
                Audio: false,
                Artwork: false,
                Video: false,
                [item]: true,
            });
        };
    };
    return (
        <main className="main">
            <div className="main__container container">
                <section className="main__featuredNFTs main-featuredNFTs">
                    <div className="main-featuredNFTs__header">
                        Featured NFTs
                    </div>
                    <GridOfCards cards={cards} columns={4} rows={1} />
                </section>
                <section className="main__latestNFTs main-latestNFTs">
                    <div className="main-latestNFTs__header">Latest NFTs</div>
                    <div className="main-latestNFTs__filters">
                        <div
                            className={`main-latestNFTs__filter ${
                                isActive.All ? "active" : null
                            }`}
                            onClick={handleClick("All")}
                        >
                            All
                        </div>
                        <div
                            className={`main-latestNFTs__filter ${
                                isActive.Audio ? "active" : null
                            }`}
                            onClick={handleClick("Audio")}
                        >
                            Audio
                        </div>
                        <div
                            className={`main-latestNFTs__filter ${
                                isActive.Artwork ? "active" : null
                            }`}
                            onClick={handleClick("Artwork")}
                        >
                            Artwork
                        </div>
                        <div
                            className={`main-latestNFTs__filter ${
                                isActive.Video ? "active" : null
                            }`}
                            onClick={handleClick("Video")}
                        >
                            Video
                        </div>
                    </div>
                    <GridOfCards cards={cards} columns={4} rows={2} />
                </section>
            </div>
        </main>
    );
};
export default HomeMainContent;
