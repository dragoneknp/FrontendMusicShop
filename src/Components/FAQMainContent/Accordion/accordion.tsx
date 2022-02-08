import { useState } from "react";
import "./accordion.scss";

const Accordion = ({
    header,
    description,
}: {
    header: string;
    description: string;
}) => {
    const [isOpen, changeOpen] = useState(false);

    return (
        <div className="accordion">
            <button
                className={`accordion__header ${isOpen ? "active" : ""}`}
                onClick={() => changeOpen(!isOpen)}
            >
                {header}
            </button>
            <div className={`accordion__panel ${isOpen ? "active" : ""}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Accordion;
