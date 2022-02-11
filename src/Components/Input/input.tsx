import { useState } from "react";
import "./input.scss";

interface InputProps {
    type?: string;
    value: string;
    header: string;
    setValue: Function;
    checkValid: Function;
}

const Input = ({
    type = undefined,
    value,
    header,
    setValue,
    checkValid,
}: InputProps) => {
    const [isValid, changeValid] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);

    const handleBlur = () => {
        changeValid(checkValid(value));
    };

    const handleFocus = () => {
        changeValid(true);
    };

    return (
        <div className="input__container">
            <input
                type={type ? type : "text"}
                className="input"
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={header}
                id={header}
            />
            {!isValid && <span className="alert">{header} is invalid</span>}
        </div>
    );
};

export default Input;
