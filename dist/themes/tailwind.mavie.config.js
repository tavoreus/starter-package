"use strict";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./pages/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,css}"],
  // theme: theme
  prefix: 'mavie-',
  theme: {
    // name: 'mavie-theme',
    colors: {
      green: {
        softest: '#CCDDDC',
        soft: '#80A9A7',
        light: '#4D8784',
        medium: '#1B6561',
        dark: '#025450'
      },
      beige: {
        soft: '#F8F8F3',
        light: '#F0EFE4',
        medium: '#EBEADC',
        dark: '#E9E8D8'
      },
      mint: {
        soft: '#CBE3BF',
        light: '#B7D8A6',
        medium: '#A2CC8C',
        dark: '#98C780'
      },
      blue: {
        softest: '#EAF4F8',
        soft: '#CBE2EE',
        light: '#B7D7E7',
        medium: '#A2CCE0',
        dark: '#98C6DD'
      },
      yellow: {
        soft: '#FCF2A7',
        light: '#FBED83',
        medium: '#FAE860',
        dark: '#F9E54F'
      },
      coral: {
        soft: '#F8AFB0',
        light: '#F58F90',
        medium: '#F26F70',
        dark: '#F15F61'
      },
      gray: {
        soft: "#D8D8D8",
        light: "#E9E9E9",
        medium: "#676767",
        dark: "#3B3B3B"
      },
      white: "#FFFFFF",
      black: "#262626"
    },
    extend: {
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', 'serif'],
        sans: ['Roboto', 'sans']
      },
      borderRadius: {
        '4xl': '2.5rem'
      },
      boxShadow: {
        '01-light': "0px 1px 1px rgba(2, 84, 80, 0.04), 0px 2px 1px rgba(2, 84, 80, 0.02), 0px 1px 8px rgba(2, 84, 80, 0.04)",
        '01-strong': "0px 1px 1px rgba(2, 84, 80, 0.08), 0px 2px 1px rgba(2, 84, 80, 0.04), 0px 1px 8px rgba(2, 84, 80, 0.08)",
        '02-light': "0px 5px 5px rgba(2, 84, 80, 0.05), 0px 2px 2px rgba(2, 84, 80, 0.1)",
        '02-strong': "0px 5px 5px rgba(2, 84, 80, 0.1), 0px 2px 2px rgba(2, 84, 80, 0.2)",
        '04-light': "0px 2px 4px rgba(2, 84, 80, 0.06), 0px 6px 10px rgba(2, 84, 80, 0.03), 0px 10px 15px rgba(2, 84, 80, 0.06)",
        '04-strong': "0px 2px 4px rgba(2, 84, 80, 0.12), 0px 6px 10px rgba(2, 84, 80, 0.06), 0px 10px 15px rgba(2, 84, 80, 0.12)",
        '16-light': "0px 40px 80px rgba(2, 84, 80, 0.1), 0px 16px 32px rgba(2, 84, 80, 0.07), 0px 4px 8px rgba(2, 84, 80, 0.05)",
        '16-strong': "0px 2px 4px rgba(2, 84, 80, 0.06), 0px 6px 10px rgba(2, 84, 80, 0.03), 0px 10px 15px rgba(2, 84, 80, 0.06)"
      }
    }
  },
  plugins: []
};