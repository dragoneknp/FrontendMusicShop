export const isEmailValid = (email: string) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
};

export const isNameValid = (name: string) => {
    return /^[a-zA-Z]*$/.test(name) && name.length >= 4;
};

export const isPasswordValid = (password: string) => {
    return password.length >= 8 && new Set(password).size >= 5;
};

export const isNumberValid = (number: string) => {
    return number.length === 11 && !/\D/.test(number);
};
