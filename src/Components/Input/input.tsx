import "./input.scss";

interface InputProps {
    type?: string;
    value: string;
    header: string;
    setValue: Function;
}

const Input = (props: InputProps) => {
    return (
        <input
            type={props.type ? props.type : "text"}
            className="input"
            value={props.value}
            onChange={(event) => props.setValue(event.target.value)}
            placeholder={props.header}
        />
    );
};

export default Input;
