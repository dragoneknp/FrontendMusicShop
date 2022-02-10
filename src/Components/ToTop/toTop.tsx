import "./toTop.scss";

const ToTop = () => {
    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return <div className="toTop" onClick={handleClick}></div>;
};

export default ToTop;
