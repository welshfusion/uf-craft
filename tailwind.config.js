require("dotenv").config();

module.exports = {
    mode: "jit",

    content: [
        "./src/**/*.{html,js}",
        "./templates/**/*.{html,twig,json,php,js}",
        "./config/formie.php",
    ],
    safelist: [],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },

        screens: {
            sm: "540px",
            md: "768px",
            lg: "991px",
            xl: "1248px",
        },
        extend: {
            fontSize: {
                "6.5xl": ["4rem", "4.5rem"],
                "4.5xl": ["2.5rem", "2.5rem"],
                "3.5xl": ["2rem", "2.7rem"],
                "7.5xl": ["4.875rem", "5.437rem"],
            },

            colors: {
                // Please use variable names as "primary" , "secondary" , "ternary" and then "red", "blue" etc.,
                // All variable needs colors set main color as 500 variant and light and dark colors for rest variants.

                // Below is the example pallets. Replace according to projects need.projects
                // https://www.tailwindshades.com/
                transparent: "transparent",
                current: "currentColor",
                gray: {
                    50: "#FFFFFF",
                    100: "#F2F2F2",
                    200: "#C1C1C1",
                    300: "#868686",
                    400: "#303030",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                    950: "#000000",
                },
                crimson: {
                    50: "#F8BAC2",
                    100: "#F6A7B2",
                    200: "#F28391",
                    300: "#EE5E71",
                    400: "#EA3951",
                    500: "#E21833",
                    600: "#AF1328",
                    700: "#7D0D1C",
                    800: "#4A0811",
                    900: "#170205",
                    950: "#000000",
                },
                gold: {
                    50: "#FFF2B8",
                    100: "#FFEFA3",
                    200: "#FFE87A",
                    300: "#FFE052",
                    400: "#FFD929",
                    500: "#FFD200",
                    600: "#e8c005",
                    700: "#8F7600",
                    800: "#574700",
                    900: "#1F1900",
                    950: "#030200",
                },
            },

            fontFamily: {
                //Please use font name as variable key instead sans. For example "faro: ['faro']"
                interstate: ["Interstate", "Arial", "sans-serif"],
                druktext: ["DrukTextWide", "Arial", "sans-serif"],
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

            // spacing: {
            //   96: "24rem",
            //   76: "302px",
            // },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
    ],
};
