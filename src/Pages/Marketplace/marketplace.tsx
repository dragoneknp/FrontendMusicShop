import MarketplaceMainContent from "../../Components/MarketplaceMainContent/marketplaceMainContent";
import PageLayout from "../../Layout/pageLayout";
import "./marketplace.scss";
const Marketplace = () => {
    return (
        <PageLayout page={"marketplace"}>
            <MarketplaceMainContent />
        </PageLayout>
    );
};
export default Marketplace;
