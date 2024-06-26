require("dotenv").config();

module.exports = {
    mode: "jit",

    content: [
        "./src/**/*.{html,js}",
        "./templates/**/*.{html,twig,json,php,js}",
        "./config/formie.php",
    ],

    safelist: process.env.PURGE_CSS == "true" ? [] : [{ pattern: /.*/ }],

    theme: {
        container: {
            center: true,
            padding: "1.5rem",
        },

        screens: {
            sm: "540px",
            md: "768px",
            lg: "991px",
            xl: "1280px",
        },
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.5rem" }],
            base: ["1rem", { lineHeight: "1.75rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "2rem" }],
            "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
            "3xl": ["1.75rem", { lineHeight: "2.25rem" }],
            "4xl": ["2rem", { lineHeight: "2.5rem" }],
            "5xl": ["2.5rem", { lineHeight: "3rem" }],
            "6xl": ["3rem", { lineHeight: "3.5rem" }],
            "7xl": ["4rem", { lineHeight: "4.5rem" }],
        },
        extend: {
            borderRadius: {
                "4xl": "2.5rem",
            },

            colors: {
                // Please use variable names as "primary" , "secondary" , "ternary" and then "red", "blue" etc.,
                // All variable needs colors set main color as 500 variant and light and dark colors for rest variants.

                // Below is the example pallets. Replace according to projects need.projects
                // https://www.tailwindshades.com/
                transparent: "transparent",
                current: "currentColor",
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                    950: "#0a0a0a",
                },
                cyprus: {
                    50: "#809fa2",
                    100: "#668b8f",
                    200: "#4d787c",
                    300: "#336569",
                    400: "#1a5157",
                    500: "#003e44",
                    600: "#00383d",
                    700: "#003236",
                    800: "#002b30",
                    900: "#002529",
                    950: "#001f22",
                },
                green: {
                    50: "#d8d9a0",
                    100: "#c4c671",
                    200: "#babd59",
                    300: "#b1b341",
                    400: "#a7aa2a",
                    500: "#9da012",
                    600: "#8d9010",
                    700: "#7e800e",
                    800: "#6e700d",
                    900: "#5e600b",
                    950: "#4f5009",
                },
            },

            fontFamily: {
                //Please use font name as variable key instead sans. For example "faro: ['faro']"
                sans: ["Mona Sans", "Arial", "sans-serif"],
                display: [
                    ["Mona Sans", "Arial", "sans-serif"],
                    { fontVariationSettings: '"wdth" 125' },
                ],
            },

            animation: {
                reveal: "reveal 0.5s ease infinite",
                "reveal-reverse": "reveal 0.5s ease infinite reverse",
                slide: "slide 0.5s ease infinite",
            },
            keyframes: {
                reveal: {
                    from: { transform: "scale(0.001)" },
                    to: { transform: "scale(1)" },
                },
                slide: {
                    to: { transform: "translateX(1.5em)" },
                },
            },

            boxShadow: {
                custom: "0 9px 26px 0px rgba(23, 15, 73, 0.05)",
            },

            borderRadius: {
                "4xl": "2.5rem",
            },

            // spacing: {
            //   96: "24rem",
            //   76: "302px",
            // },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
    ],
};
