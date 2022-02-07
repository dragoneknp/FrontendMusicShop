import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { useError } from "../../Hooks/useError";
import { fetchMyBids } from "../../Store/ActionCreators/myBidsAction";
import { getBids, getLogin } from "../../Store/selectors";
import { getToken } from "../../utils/getToken";
import GridOfCards from "../GridOfCards/gridOfCards";
import Loader from "../Loader/loader";
import ProfileAside from "../ProfileAside/profileAside";
import "./myBidsMainContent.scss";

const MyBidsMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);

    const { isLoading, error, cards } = useAppSelector(getBids);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMyBids(getToken()));
    }, [dispatch]);

    useError(error);

    return (
        <main className="myBidsMain">
            <div className="myBidsMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="myBidsMain__content">
                    <div className="myBidsMain__header">Your Bids</div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <GridOfCards
                            columns={2}
                            rows={2}
                            cards={cards}
                            to={"/discover"}
                        />
                    )}
                </section>
            </div>
        </main>
    );
};

export default MyBidsMainContent;
