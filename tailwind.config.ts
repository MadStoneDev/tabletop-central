import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        sans: ["Oswald"],
        accent: ["Uncial Antiqua"],
      },
      colors: {
        "tabletop-red": "#DE1601",
        "tabletop-red-light": "#FF4848",
        "tabletop-red-dark": "#AC1606",
        "tabletop-off-white": "#EEEEEE",
        "tabletop-black": "#141414",
      },
    },
  },
  plugins: [],
} satisfies Config;
