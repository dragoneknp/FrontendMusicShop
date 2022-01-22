import PageLayout from "../../Layout/pageLayout";
import "./marketplaceListenings.scss";
import MarketplaceListeningsMainContent from "../../Components/MarketplaceListeningsMainContent/marketplaceListeningsMainContent";
import { marketPlaceCard } from "../../mock/mock";
const MarketplaceListenings = () => {
    return (
        <PageLayout page={"marketplaceListenings"}>
            <MarketplaceListeningsMainContent {...marketPlaceCard} />
        </PageLayout>
    );
};
export default MarketplaceListenings;
