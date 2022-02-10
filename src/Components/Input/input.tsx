import React, { SyntheticEvent } from "react";
import "./input.scss";

interface InputProps {
    type?: string;
    value: string;
    header: string;
    setValue: Function;
}

const Input = ({ type = undefined, value, header, setValue }: InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);
    return (
        <input
            type={type ? type : "text"}
            className="input"
            value={value}
            onChange={handleChange}
            placeholder={header}
        />
    );
};

export default Input;
