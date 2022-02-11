import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { updateProfile } from "../../Store/ActionCreators/updateProfileAction";
import { getLogin } from "../../Store/selectors";
import { UserProps } from "../../types/types";
import {
    isEmailValid,
    isNameValid,
    isNumberValid,
    isPasswordValid,
} from "../../utils/formValidators";
import { getToken } from "../../utils/getToken";
import Input from "../Input/input";
import ProfileAside from "../ProfileAside/profileAside";
import "./profileMainContent.scss";

const ProfileMainContent = () => {
    const {
        userData: { firstName, lastName, joinedAt },
    } = useAppSelector(getLogin);

    const dispatch = useAppDispatch();

    const [userData, changeData] = useState<UserProps>({
        firstName: "",
        lastName: "",
        emailAdress: "",
        phoneNumber: "",
        displayName: "",
        password: "",
    });

    const handleClick = () => {
        // TODO fix this strange logic
        const data: Partial<UserProps> = {};
        let prop: keyof UserProps;
        for (prop in userData) {
            if (userData[prop] !== "") {
                data[prop] = userData[prop];
            }
        }

        dispatch(
            updateProfile(
                data,
                getToken(),
                localStorage.getItem("token")?.split(";")[0] as string,
                localStorage.getItem("token")?.split(";")[1] as string
            )
        );
        changeData({
            firstName: "",
            lastName: "",
            emailAdress: "",
            phoneNumber: "",
            displayName: "",
            password: "",
        });
    };

    const handleChange = (form: string) => {
        return (value: string) => changeData({ ...userData, [form]: value });
    };

    return (
        <main className="profileMain">
            <div className="profileMain__container container">
                <ProfileAside
                    name={`${firstName} ${lastName}`}
                    joinedAt={joinedAt || "smth went wrong :("}
                />
                <section className="profileMain__content">
                    <div className="profileMain__title">
                        Update your profile
                    </div>
                    <div className="profileMain__form profileMain-form">
                        <Input
                            header="First Name"
                            value={userData.firstName}
                            setValue={handleChange("firstName")}
                            checkValid={isNameValid}
                        />
                        <Input
                            header="Last Name"
                            value={userData.lastName}
                            setValue={handleChange("lastName")}
                            checkValid={isNameValid}
                        />
                        <Input
                            header="Email Adress"
                            value={userData.emailAdress}
                            setValue={handleChange("emailAdress")}
                            checkValid={isEmailValid}
                        />
                        <Input
                            header="Phone Number"
                            value={userData.phoneNumber}
                            setValue={handleChange("phoneNumber")}
                            checkValid={isNumberValid}
                        />
                        <Input
                            header="Display Name"
                            value={userData.displayName}
                            setValue={handleChange("displayName")}
                            checkValid={isNameValid}
                        />
                        <Input
                            header="Password"
                            value={userData.password}
                            setValue={handleChange("password")}
                            type="password"
                            checkValid={isPasswordValid}
                        />
                        <div className="profileMain-form__button">
                            <button
                                className="profileMain-form__updateButton"
                                onClick={handleClick}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProfileMainContent;
