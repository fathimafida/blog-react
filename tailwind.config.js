const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|dropdown|input|modal|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}

