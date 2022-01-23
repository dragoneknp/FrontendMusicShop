import PageLayout from "../../Layout/pageLayout";
import "./marketplaceListenings.scss";
import MarketplaceListeningsMainContent from "../../Components/MarketplaceListeningsMainContent/marketplaceListeningsMainContent";

const MarketplaceListenings = () => {
    return (
        <PageLayout page={"marketplaceListenings"}>
            <MarketplaceListeningsMainContent />
        </PageLayout>
    );
};
export default MarketplaceListenings;
