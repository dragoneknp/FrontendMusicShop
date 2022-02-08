import { memo } from "react";
import "./rule.scss";

const Rule = ({
    text,
    header,
    item,
}: {
    text: string;
    header: string;
    item: number;
}) => {
    return (
        <section className="termsMain__rule termsMain-rule">
            <div className="termsMain-rule__header">{`${item}.${header}`}</div>
            <div className="termsMain-rule__text">{text}</div>
        </section>
    );
};

export default memo(Rule);
