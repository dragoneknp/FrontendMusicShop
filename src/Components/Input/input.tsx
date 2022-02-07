import "./input.scss";

interface InputProps {
    type?: string;
    value: string;
    header: string;
    setValue: Function;
}

const Input = ({ type = undefined, value, header, setValue }: InputProps) => {
    return (
        <input
            type={type ? type : "text"}
            className="input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={header}
        />
    );
};

export default Input;
