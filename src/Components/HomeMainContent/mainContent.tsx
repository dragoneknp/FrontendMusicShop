import React from "react";
import GridOfCards from "../GridOfCards/gridOfCards";
import { cards } from "../../mock/mock";
import "./mainContent.scss";
const MainContent = () => {
    return (
        <main className="main">
            <div className="main__container container">
                <div className="main__featuredNfts main-featuredNFTs">
                    <div className="main-featuredNfts__header">
                        Featured NFTs
                    </div>
                    <GridOfCards cards={cards} columns={4} rows={1} />
                </div>
            </div>
        </main>
    );
};
export default MainContent;
