import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchMyBids } from "../../Store/ActionCreators/myBidsAction";
import { getToken } from "../../utils/getToken";
import GridOfCards from "../GridOfCards/gridOfCards";
import ProfileAside from "../ProfileAside/profileAside";
import "./myBidsMainContent.scss";
const MyBidsMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector((store) => store.login);
    const { isLoading, error, cards } = useAppSelector((store) => store.myBids);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMyBids(getToken()));
    }, []);
    return (
        <main className="myBidsMain">
            <div className="myBidsMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="myBidsMain__content">
                    <div className="myBidsMain__header">Your Bids</div>
                    <GridOfCards
                        columns={2}
                        rows={2}
                        cards={cards}
                        to={"/discover"}
                    />
                </section>
            </div>
        </main>
    );
};
export default MyBidsMainContent;
