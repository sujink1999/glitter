import { twMerge } from "tailwind-merge";

export const concatClasses = (classes: string[]): string =>
    twMerge(classes.join(" "));

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
