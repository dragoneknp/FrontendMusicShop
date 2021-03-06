import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useLoading } from "../../Hooks/useLoading";
import { fetchMyNFTs } from "../../Store/ActionCreators/myNFTsAction";
import { getLogin, getNFTs } from "../../Store/selectors";
import { getToken } from "../../utils/getToken";
import ProfileAside from "../ProfileAside/profileAside";
import WalletCard from "../WalletCard/walletCard";
import "./myNFTsMainContent.scss";

const MyNFTsMainContent = () => {
    const dispatch = useAppDispatch();
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);
    const { isLoading, error, walletCards } = useAppSelector(getNFTs);
    const [load] = useLoading();
    useEffect(() => {
        dispatch(fetchMyNFTs(getToken()));
    }, [dispatch]);
    return (
        <main className="myNFTsMain">
            <div className="myNFTsMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="myNFTsMain__content">
                    <div className="myNFTsMain__header">Wallet</div>
                    {!(walletCards.length > 0) ? (
                        <div style={{ textAlign: "center" }}>
                            <h2>Nothing here :(</h2>
                        </div>
                    ) : (
                        load({
                            flag: isLoading,
                            component: walletCards.map((card) => (
                                <WalletCard
                                    key={card.id}
                                    id={card.id}
                                    count={card.count}
                                    description={card.description}
                                    editionOf={card.editionOf}
                                    header={card.header}
                                    picture={card.picture}
                                />
                            )),
                        })
                    )}
                </section>
            </div>
        </main>
    );
};

export default MyNFTsMainContent;
