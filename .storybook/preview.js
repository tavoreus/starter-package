export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


// preview.js

// // All stories expect a theme arg
// export const argTypes = {
//   theme: {
//     control: 'inline-radio',
//     options: [
//       'Mavie',
//       'Lifely'
//     ],
//     table: {
//       category: 'Global',
//     },
//   },
// };

// // The default value of the theme arg to all stories
// export const args = {
//   theme: 'Mavie'
// };