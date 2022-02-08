import Input from "../../Input/input";
import "./registrationInput.scss";

const RegistrationInput = (props: {
    header: string;
    value: string;
    setValue: Function;
    type?: string;
}) => {
    return (
        <div className="loginMain-registration__input loginMain-registration-input">
            <div className="loginMain-registration-input__header">
                {props.header}
            </div>
            <Input {...props} />
        </div>
    );
};

export default RegistrationInput;
