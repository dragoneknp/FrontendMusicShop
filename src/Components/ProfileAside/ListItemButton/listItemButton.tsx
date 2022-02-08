import { Link } from "react-router-dom";
import "./listItemButton.scss";

const ListItemButton = ({
    icon,
    label,
    to,
    handleClick,
}: {
    icon: string;
    label: string;
    to: string;
    handleClick?: any;
}) => {
    return (
        <li className="list__item list-item">
            {handleClick ? (
                <Link to={to} onClick={handleClick}>
                    <button className="list-item__button">
                        <i className="list-item__icon" data-icon={icon} />
                        <div className="list-item__label">{label}</div>
                    </button>
                </Link>
            ) : (
                <Link to={to}>
                    <button className="list-item__button">
                        <i className="list-item__icon" data-icon={icon} />
                        <div className="list-item__label">{label}</div>
                    </button>
                </Link>
            )}
        </li>
    );
};

export default ListItemButton;
