import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./breadCrumbs.scss";
interface BreadCrumb {
    title: string;
    path?: string;
}
const BreadCrumbs = (props: { breadCrumbs: BreadCrumb[] }) => {
    const { breadCrumbs } = props;
    return (
        <div className="breadCrumbs">
            {breadCrumbs.map((item) => (
                <div
                    className="breadCrumbs__item"
                    key={`${item.title}_${Math.random() * 10000}`}
                >
                    {item.path ? (
                        <Link to={item.path}>{item.title}</Link>
                    ) : (
                        <span>{item.title}</span>
                    )}
                </div>
            ))}
        </div>
    );
};
export default memo(BreadCrumbs);
