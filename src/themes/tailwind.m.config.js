/** @type {import('tailwindcss').Config} */

// import addPlugin from "tailwindcss/plugin";
// import aspectRatioPlugin from "@tailwindcss/aspect-ratio";

const BASE_FONT_SIZE_PX = 10;

const noop = (val) => val;
const unitToPx = (val) => `${val}px`;
const unitToRem = (val) => `${val}rem`;
const pxToRem = (val) => val / BASE_FONT_SIZE_PX;
const pxUnitToRem = (val) => unitToRem(pxToRem(val));

const createScale = ({
  min = 0,
  max = 100,
  steps = 1,
  formatVal = noop,
  formatKey = noop,
}) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  return scale.reduce((prev, curr) => {
    const key = String(formatKey(curr));
    const val = curr === 0 ? curr : formatVal(curr);
    return { ...prev, [key]: val };
  }, {});
};

const spacing = {
  ...createScale({ max: 32, steps: 1, formatVal: pxUnitToRem }),
  ...createScale({ min: 32, max: 64, steps: 2, formatVal: pxUnitToRem }),
  ...createScale({ min: 68, max: 128, steps: 4, formatVal: pxUnitToRem }),
  ...createScale({ min: 136, max: 256, steps: 8, formatVal: pxUnitToRem }),
  ...createScale({ min: 272, max: 512, steps: 16, formatVal: pxUnitToRem }),
  ...createScale({ min: 544, max: 1024, steps: 32, formatVal: pxUnitToRem }),
};

module.exports = {
  utils: {
    pxRem: pxUnitToRem,
  },
  preset: {
    theme: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#ffffff",
        black: "#262626",
        grey: {
          soft: "#D8D8D8",
          light: "#E9E9E9",
          medium: "#676767",
          dark: "#3B3B3B",
          darkest: "#2A2A2A",
          quote: "#929292",
          teaser: "#262626",
          event: "#ffffff26",
        },
        green: {
          softest: "#CCDDDC",
          soft: "#80A9A7",
          light: "#4D8784",
          medium: "#1B6561",
          dark: "#025450",
        },
        beige: {
          soft: "#F8F8F3",
          light: "#F0EFE4",
          medium: "#EBEADC",
          dark: "#E9E8D8",
        },
        mint: {
          softest: "#E1F5D7",
          soft: "#CBE3BF",
          light: "#B7D8A6",
          medium: "#A2CC8C",
          dark: "#98C780",
        },
        softBlue: {
          softest: "#EAF4F8",
          soft: "#CBE2EE",
          light: "#B7D7E7",
          medium: "#A2CCE0",
          dark: "#98C6DD",
        },
        yellow: {
          soft: "#FCF2A7",
          light: "#FBED83",
          medium: "#FAE860",
          dark: "#F9E54F",
        },
        coral: {
          soft: "#F8AFB0",
          light: "#F58F90",
          medium: "#F26F70",
          dark: "#F15F61",
        },
        functional: {
          success: "#24BB60",
          error: "#F15F61",
        },
      },
      extend: {
        spacing,
        zIndex: {
          behind: -1,
        },
      },
    },
    plugins: [
      // aspectRatioPlugin,
      // addPlugin(function ({ addBase, theme }) {
      //   addBase({
      //     ":root": {
      //       fontSize: unitToPx(BASE_FONT_SIZE_PX),
      //     },
      //   });
      // }),
    ],
  },
};
