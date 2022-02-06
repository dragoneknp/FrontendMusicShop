import React, { memo } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
                <div className="breadCrumbs__item" key={uuidv4()}>
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
