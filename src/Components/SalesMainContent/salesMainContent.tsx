import { useAppSelector } from "../../Hooks/redux";
import { getLogin } from "../../Store/selectors";
import ProfileAside from "../ProfileAside/profileAside";
import SalesCard from "../SalesCard/salesCard";
import "./salesMainContent.scss";

const SalesMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);

    return (
        <main className="salesMain">
            <div className="salesMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="salesMain__content">
                    <div className="salesMain__header">Past Sales</div>
                    <div className="salesMain__description">
                        Your NFTs sales from the secondary marketplace.
                    </div>
                    <div className="salesMain__alert">
                        <span>IMPORTANT</span>, please note: Funds may not
                        settle for up to 30 days, in the event the purchaser is
                        not able to complete or settle the transaction, the sold
                        NFT will return to your wallet and the funds will not be
                        available. You may have to resell this token to another
                        buyer.
                    </div>
                    <div className="salesMain__headers salesMain-headers">
                        <div className="salesMain-headers__item">Item</div>
                        <div className="salesMain-headers__item">Date</div>
                        <div className="salesMain-headers__item">Edition</div>
                        <div className="salesMain-headers__item">Proceeds</div>
                    </div>
                    <SalesCard
                        picture={"/Images/3.svg"}
                        purchasedBy={"@curios"}
                        date={"2021-11-07"}
                        proceeds={199}
                        id={"qweqweqweqweqwe"}
                        header={"Limited VERZUZ Commemorative NFT Bundle"}
                        editionOf={3}
                        collectionId={
                            "0x2d0c8af807ef45ac17cafb2973d866ba8f38caa9"
                        }
                    />
                </section>
            </div>
        </main>
    );
};

export default SalesMainContent;
