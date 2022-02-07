import React from "react";
import "./label.scss";
import BreadCrumbs from "../BreadCrumbs/breadCrumbs";

interface BreadCrumb {
    title: string;
    path?: string;
}

interface LabelProps {
    header: string;
    breadCrumbs: BreadCrumb[];
}

const Label = ({ header, breadCrumbs }: LabelProps) => {
    return (
        <div className="label">
            <div className="container label__container">
                <div className="label__header">
                    <h4>{header}</h4>
                </div>
                <BreadCrumbs breadCrumbs={breadCrumbs} />
            </div>
        </div>
    );
};

export default Label;
