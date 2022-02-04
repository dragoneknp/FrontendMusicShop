const formatPrice = (price: string): string => {
    price = price.split("").reverse().join("");
    let newString: string = "";
    let index = 1;
    for (let char of price) {
        if (index % 3 === 0 && price.length > 3) {
            newString += char;
            newString += ",";
        } else {
            newString += char;
        }

        index++;
    }
    return `${newString.split("").reverse().join("")}.00`;
};
export { formatPrice };
