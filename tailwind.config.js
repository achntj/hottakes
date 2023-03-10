var config = require("./config.json");

const linkColor = config.linkColor;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["Recife"],
      sans: [
        "Helvetica Neue",
        "Helvetica",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "system-ui",
        "sans-serif",
      ],
      body: [
        "Epilogue",
        "Helvetica Neue",
        "Helvetica",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "system-ui",
        "sans-serif",
      ],
    },
    extend: {
      fontSize: {
        base: "1.125em",
      },
      colors: {
        accent: "#5e03fc",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: linkColor || "rgb(14 165 233 / 1)",
              textDecoration: "none",
            },
            p: {
              marginTop: "1em",
              marginBottom: "1em",
              fontSize: "1.125em",
            },
            h2: {
              marginTop: "1em",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
