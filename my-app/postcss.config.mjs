const config = {
  plugins: ["@tailwindcss/postcss"],
  tailwindcss: {
    config: "./tailwind.config.js",
  },
  autoprefixer: {
    grid: true,
    flexbox: true,
  },
  "postcss-nested": {},
  "postcss-custom-properties": {
    preserve: false,
  },
  "postcss-preset-env": {
    stage: 1,
    features: {
      "custom-properties": true,
      "nesting-rules": true,
    },
  },
  
};

export default config;
