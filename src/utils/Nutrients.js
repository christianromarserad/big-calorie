export const getTotal = (values) => {
    let total = values.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    return Math.round(total);
}