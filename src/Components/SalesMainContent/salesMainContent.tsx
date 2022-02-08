import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useError } from "../../Hooks/useError";
import { useLoading } from "../../Hooks/useLoading";
import { fetchMySales } from "../../Store/ActionCreators/mySalesAction";
import { getLogin, getSales } from "../../Store/selectors";
import { getToken } from "../../utils/getToken";
import ProfileAside from "../ProfileAside/profileAside";
import SalesCard from "../SalesCard/salesCard";
import "./salesMainContent.scss";

const SalesMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);
    const { isLoading, error, salesCards } = useAppSelector(getSales);
    const [load] = useLoading();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMySales(getToken()));
    }, [dispatch]);
    useError(error);

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
                    {load({
                        flag: isLoading,
                        component: salesCards.map((item) => (
                            <SalesCard
                                picture={item.picture}
                                purchasedBy={item.purchasedBy}
                                date={item.date}
                                proceeds={item.proceeds}
                                id={item.id}
                                header={item.header}
                                editionOf={item.editionOf}
                                collectionId={item.collectionId}
                            />
                        )),
                    })}
                </section>
            </div>
        </main>
    );
};

export default SalesMainContent;
