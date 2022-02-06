import "./toTop.scss";

const ToTop = () => {
    return (
        <div
            className="toTop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
    );
};

export default ToTop;
