import React, { useEffect, useState } from "react";
import GridOfCards from "../GridOfCards/gridOfCards";
import "./homeMainContent.scss";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchCards } from "../../Store/ActionCreators/cardAction";
import Loader from "../Loader/loader";
import { useError } from "../../Hooks/useError";
const HomeMainContent = (props: { reference: React.Ref<HTMLDivElement> }) => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector((state) => state.card);
    useEffect(() => {
        dispatch(fetchCards());
    }, []);
    useError(error);
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
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <GridOfCards
                            cards={cards}
                            columns={4}
                            rows={1}
                            to="/home"
                        />
                    )}
                </section>
                <section className="main__latestNFTs main-latestNFTs">
                    <div
                        className="main-latestNFTs__header"
                        ref={props.reference}
                    >
                        Latest NFTs
                    </div>
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
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <GridOfCards
                            cards={cards}
                            columns={4}
                            rows={2}
                            to="/home"
                        />
                    )}
                </section>
            </div>
        </main>
    );
};
export default HomeMainContent;
