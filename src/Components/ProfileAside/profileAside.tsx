import "./profileAside.scss";
import { useAppDispatch } from "../../Hooks/redux";
import { logout } from "../../Store/ActionCreators/logoutAction";
import ListItemButton from "./ListItemButton/listItemButton";
import { useCallback } from "react";

interface ProfileAsideProps {
    avatar?: string;
    name: string;
    joinedAt: string;
}

const ProfileAside = ({ avatar, name, joinedAt }: ProfileAsideProps) => {
    const dispatch = useAppDispatch();

    const handleLogoutClick = useCallback(() => {
        dispatch(logout());
    }, []);

    return (
        <aside className="aside">
            <div className="aside__header">
                <div className="aside__avatar">
                    {avatar ? <img src={avatar} alt="avatar" /> : null}
                </div>
                <div className="aside__info aside-info">
                    <div className="aside-info__name">{name}</div>
                    <div className="aside-info__joinedAt">{joinedAt}</div>
                </div>
            </div>
            <nav className="aside__nav">
                <ul className="aside__list aside-list">
                    <ListItemButton
                        label="My NFTs"
                        icon="shoppingBasket"
                        to="/profile/myNFTs"
                    />
                    <ListItemButton
                        label="My Bids"
                        icon="bids"
                        to="/profile/myBids"
                    />
                    <ListItemButton
                        label="Sales"
                        icon="sales"
                        to="/profile/sales"
                    />
                    <ListItemButton
                        label="Payouts"
                        icon="payouts"
                        to="/profile/payouts"
                    />
                    <ListItemButton
                        label="Profile"
                        icon="profile"
                        to="/profile"
                    />
                    <ListItemButton
                        label="Logout"
                        icon="logout"
                        to="/home"
                        handleClick={handleLogoutClick}
                    />
                </ul>
            </nav>
        </aside>
    );
};

export default ProfileAside;
