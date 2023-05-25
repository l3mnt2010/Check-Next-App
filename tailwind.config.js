/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Register: "url('/my-app/public/images/banner.jpg')",
      },
      backgroundColor: {
        new: "#00B2FF",
        BG_Basic: "#5956E9",
        BG_Footer: "#232233",
        BG_Menu: "#6C6C72",
        white: "#fff",
        blue: "#0096FF",
        BG_Wel: "#000080",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
