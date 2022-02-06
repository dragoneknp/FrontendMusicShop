import React from "react";
import "./errorMainContent.scss";

const ErrorMainContent = () => {
    return (
        <main className="errorMain">
            <div className="errorMain__container container">
                <div className="errorMain__header">404</div>
                <div className="errorMain__label">Not Found</div>
                <div className="errorMain__description">
                    The resource requested could not be found on this server!
                </div>
            </div>
        </main>
    );
};

export default ErrorMainContent;
