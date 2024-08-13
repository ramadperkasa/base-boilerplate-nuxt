import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import flowbite from "flowbite/plugin";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#23363a",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "uil"]),
    }),
    require('@tailwindcss/forms'),
    flowbite,
  ],
};
