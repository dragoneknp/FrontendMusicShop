import React, { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./dropDown.scss";

interface DropDownProps<T = string | number> {
    defaultValue: T;
    values: T[];
    setValue: (value: T) => void;
}

const DropDown = ({ defaultValue, values, setValue }: DropDownProps) => {
    const [isOpen, changeOpened] = useState(false);
    const [filter, changeFilter] = useState(defaultValue);

    const handleOpenClick = () => {
        changeOpened(!isOpen);
    };

    const handleFilterClick = (value: typeof defaultValue) => {
        return () => {
            changeFilter(value);
            if (typeof value === "string") {
                setValue(value.toLowerCase());
            } else {
                setValue(value);
            }

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
                        {values.map((item) => (
                            <li
                                className="dropDown-menu__item"
                                key={uuidv4()}
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
