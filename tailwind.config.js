/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{html,js,jsx,md,mdx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#0B0F0A",
                white: "#F0F4EF",
                black_light: "#0D1821",
                black_dark: "#DEE9F2",
                indigo_light: "#344966",
                indigo_dark: "#9AAECB",
                blue_light: "#B4CDED",
                blue_dark: "#122A4A",
                green_light: "#BFCC94",
                green_dark: "#5E6B33",
            },
        },
    },
    safelist: [],
    plugins: [require("tailwindcss-animate")],
};
