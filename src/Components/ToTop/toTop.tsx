import React, { useEffect, useState } from "react";
import "./toTop.scss";
const ToTop = () => {
    const [Yoffset, setYOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setYOffset(window.pageYOffset);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return Yoffset > 200 ? (
        <div
            className="toTop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
    ) : (
        <></>
    );
};
export default ToTop;
