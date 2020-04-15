export const getTotalCalories = (foodCalories) => {
    let total = 0;
    for (let i = 0; i < foodCalories.length; i++) {
        total += foodCalories[i];
    }
    return Math.round(total);
}

export const getTotalCarbs = (foodCarbs) => {
    let total = 0;
    for (let i = 0; i < foodCarbs.length; i++) {
        total += foodCarbs[i];
    }
    return Math.round(total);
}

export const getTotalProtein = (foodProtein) => {
    let total = 0;
    for (let i = 0; i < foodProtein.length; i++) {
        total += foodProtein[i];
    }
    return Math.round(total);
}

export const getTotalFat = (foodFat) => {
    let total = 0;
    for (let i = 0; i < foodFat.length; i++) {
        total += foodFat[i];
    }
    return Math.round(total);
}