/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
