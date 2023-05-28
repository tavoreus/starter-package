const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss")("./tailwind.mavie.config.js")],
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },
    ],
  },
};
