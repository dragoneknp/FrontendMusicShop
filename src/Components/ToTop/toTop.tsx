import { memo } from "react";
import "./toTop.scss";

const ToTop = ({ inView }: { inView: boolean }) => {
    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <div
            className={`toTop ${!inView ? "visible" : ""}`}
            onClick={handleClick}
        ></div>
    );
};

export default memo(ToTop);
