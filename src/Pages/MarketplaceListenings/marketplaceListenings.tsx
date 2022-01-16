import PageLayout from "../../Layout/pageLayout";
import "./marketplaceListenings.scss";
import MarketplaceListeningsMainContent from "../../Components/MarketplaceListeningsMainContent/marketplaceListeningsMainContent";
import { marketPlaceCard } from "../../mock/mock";
import { useLocation } from "react-router-dom";
const MarketplaceListenings = () => {
    console.log(useLocation());
    return (
        <PageLayout page={"marketplaceListenings"}>
            <MarketplaceListeningsMainContent {...marketPlaceCard} />
        </PageLayout>
    );
};
export default MarketplaceListenings;
