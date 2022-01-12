import React, { memo, useState } from "react";
import "./dropDown.scss";
interface DropDownProps {
    defaultValue: string;
    values: string[];
}
const DropDown = (props: DropDownProps) => {
    const [isOpen, changeOpened] = useState(false);
    const [filter, changeFilter] = useState(props.defaultValue);
    const handleOpenClick = () => {
        changeOpened(!isOpen);
    };
    const handleFilterClick = (value: string) => {
        return () => {
            changeFilter(value);
            handleOpenClick();
        };
    };
    return (
        <div className="dropDown">
            <div
                className={`dropDown__select ${isOpen ? "open" : ""}`}
                onClick={handleOpenClick}
            >
                {filter}
            </div>
            {isOpen && (
                <div className="dropDown__menu">
                    <ul className="dropDown-menu">
                        {props.values.map((item) => (
                            <li
                                className="dropDown-menu__item"
                                key={`${item}_${Math.random() * 10000}`}
                                onClick={handleFilterClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default memo(DropDown);
