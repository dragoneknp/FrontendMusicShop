import React, { memo, useEffect, useRef, useState } from "react";
import "./banner.scss";

const Banner = ({
    reference,
}: {
    reference: React.RefObject<HTMLDivElement>;
}) => {
    const [ref, changeRef] = useState(useRef<HTMLDivElement>(null));

    useEffect(() => {
        changeRef(reference);
    }, [reference]);

    const handleClick = () =>
        ref.current?.scrollIntoView({ behavior: "smooth" });
    return (
        <div className="banner">
            <div className="banner__container container">
                <div className="banner__header">
                    <h1>NFTs by Curios Music</h1>
                </div>
                <div className="banner__description">
                    <h4>Own a one-of-a-kind and limited digital collectible</h4>
                </div>
                <div className="banner__button">
                    <button onClick={handleClick}>
                        <h5>Latest NFT drops</h5>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Banner);
