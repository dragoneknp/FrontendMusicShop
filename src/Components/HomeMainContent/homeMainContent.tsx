import React, { useEffect, useState } from "react";
import GridOfCards from "../GridOfCards/gridOfCards";
import "./homeMainContent.scss";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchCards } from "../../Store/ActionCreators/cardAction";
import { useError } from "../../Hooks/useError";
import { getCards } from "../../Store/selectors";
import { useLoading } from "../../Hooks/useLoading";
import { Filters } from "../../types/types";
import { useBreakPoints } from "../../Hooks/useBreakPoints";

const HomeMainContent = ({
    reference,
}: {
    reference: React.Ref<HTMLDivElement>;
}) => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector(getCards);
    const [load] = useLoading();
    const [filter, changeFilter] = useState<Filters>("all");
    useEffect(() => {
        dispatch(fetchCards(filter));
    }, [dispatch, filter]);

    useError(error);

    const [isActive, changeActive] = useState({
        All: true,
        Audio: false,
        Artwork: false,
        Video: false,
    });

    const handleClick = (item: string) => {
        return () => {
            changeFilter(item.toLowerCase() as Filters);
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
                    {load({
                        flag: isLoading,
                        component: (
                            <GridOfCards
                                cards={cards}
                                columns={useBreakPoints({
                                    1120: 4,
                                    767: 3,
                                    520: 2,
                                    320: 1,
                                })}
                                rows={1}
                                to="/home"
                            />
                        ),
                    })}
                </section>
                <section className="main__latestNFTs main-latestNFTs">
                    <div className="main-latestNFTs__header" ref={reference}>
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
                    {load({
                        flag: isLoading,
                        component: (
                            <GridOfCards
                                cards={cards}
                                columns={useBreakPoints({
                                    1120: 4,
                                    767: 3,
                                    520: 2,
                                    320: 1,
                                })}
                                rows={2}
                                to="/home"
                            />
                        ),
                    })}
                </section>
            </div>
        </main>
    );
};

export default HomeMainContent;
