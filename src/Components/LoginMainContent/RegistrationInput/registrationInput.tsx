import Input from "../../Input/input";
import "./registrationInput.scss";

const RegistrationInput = ({header, value, setValue, type = undefined, checkValid}: {
    header: string;
    value: string;
    setValue: Function;
    type?: string;
    checkValid: Function;
}) => {
    return (
        <div className="loginMain-registration__input loginMain-registration-input">
            <label htmlFor={header} className="loginMain-registration-input__header">
                {header}
            </label>
            <Input header={header} value={value} setValue={setValue} type={type} checkValid={checkValid}/>
        </div>
    );
};

export default RegistrationInput;
