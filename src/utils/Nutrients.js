export const getTotal = (values) => {
    let total = values.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    return Math.round(total);
}

// Formula: https://www.thecalculatorsite.com/articles/health/bmr-formula.php
export const getBMR = (age, height, weight, gender) => {
    if (age && height && weight && gender) {
        if (gender === "male") {
            return Math.round(66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
        }
        else {
            return Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
        }
    }

    return null;
}