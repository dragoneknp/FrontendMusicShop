import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useLoading } from "../../Hooks/useLoading";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { fetchMyBids } from "../../Store/ActionCreators/myBidsAction";
import { getBids, getLogin } from "../../Store/selectors";
import { getToken } from "../../utils/getToken";
import GridOfCards from "../GridOfCards/gridOfCards";
import ProfileAside from "../ProfileAside/profileAside";
import "./myBidsMainContent.scss";

const MyBidsMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);
    const { isLoading, error, cards } = useAppSelector(getBids);

    const { width } = useWindowDimensions();
    const dispatch = useAppDispatch();
    const [load] = useLoading();

    useEffect(() => {
        dispatch(fetchMyBids(getToken()));
    }, [dispatch]);

    return (
        <main className="myBidsMain">
            <div className="myBidsMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="myBidsMain__content">
                    <div className="myBidsMain__header">Your Bids</div>
                    {!cards ? (
                        <div style={{ textAlign: "center" }}>
                            <h2>Nothing here :(</h2>
                        </div>
                    ) : (
                        load({
                            flag: isLoading,
                            component: (
                                <GridOfCards
                                    columns={width > 520 ? 2 : 1}
                                    rows={cards.length / (width > 520 ? 2 : 1)}
                                    cards={cards}
                                    to={"/discover"}
                                />
                            ),
                        })
                    )}
                </section>
            </div>
        </main>
    );
};

export default MyBidsMainContent;
