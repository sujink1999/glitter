/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                textWhite: "white",
                textGrey: "#AF9A9A",
                success: "#16C784",
                error: "#EA3943",
                transparent: "transparent",
            },
        },
    },
    plugins: [],
};
