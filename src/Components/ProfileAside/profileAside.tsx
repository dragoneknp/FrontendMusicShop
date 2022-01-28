import "./profileAside.scss";
import { Link } from "react-router-dom";
interface ProfileAsideProps {
    avatar?: string;
    name: string;
    joinedAt: string;
}
const ListItem = ({
    icon,
    label,
    to,
}: {
    icon: string;
    label: string;
    to: string;
}) => {
    return (
        <li className="list__item list-item">
            <Link to={to}>
                <button className="list-item__button">
                    <i className="list-item__icon" data-icon={icon} />
                    <div className="list-item__label">{label}</div>
                </button>
            </Link>
        </li>
    );
};
const ProfileAside = ({ avatar, name, joinedAt }: ProfileAsideProps) => {
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
                    <ListItem
                        label="My NFTs"
                        icon="shoppingBasket"
                        to="/profile/myNFTs"
                    />
                    <ListItem
                        label="My Bids"
                        icon="bids"
                        to="/profile/myBids"
                    />
                    <ListItem label="Sales" icon="sales" to="/profile/sales" />
                    <ListItem
                        label="Payouts"
                        icon="payouts"
                        to="/profile/payouts"
                    />
                    <ListItem label="Profile" icon="profile" to="/profile" />
                    <ListItem label="Logout" icon="logout" to="/home" />
                </ul>
            </nav>
        </aside>
    );
};
export default ProfileAside;
