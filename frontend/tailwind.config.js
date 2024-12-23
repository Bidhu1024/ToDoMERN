module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    /^bg-/, // Keep all background classes
    /^text-/, // Keep all text color classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
