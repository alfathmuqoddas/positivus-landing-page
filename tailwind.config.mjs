/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#B9FF66",
        brandGrey: "#F3F3F3",
        brandDark: "#191A23",
      },
    },
  },
  plugins: [],
};
