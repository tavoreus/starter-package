import ObxHbar from "./ObxHbar";

export default {
    title: 'Obx Hbar',
    component: ObxHbar,
    argTypes: {
        locale: {
          options: ['de-DE', 'en-GB'],
          control: {type: 'inline-radio'},
          description: 'Sets the locale for correct displaying numerical values based on language code.',
          // type: String
        },
        value: {
          control: { type: 'number', min: 0, max: 1200, step: 1},
        }
      }
}

const Template  = (args) => <ObxHbar {...args}/>

export const ThreeBars = Template.bind({});
ThreeBars.args = {
  thresholds: [10, 20],
  cmap: 'ryg',
  value: 15.78,
  units: 'mol',
  locale: 'de-DE'
}

export const FiveBars = Template.bind({});
FiveBars.args = {
  thresholds: [10, 20, 30, 40],
  cmap: 'RYGYR',
  value: 33.3,
  units: 'mol',
  locale: 'de-DE'
}


export const OutOfRange = Template.bind({});
OutOfRange.args = {
  thresholds: [10, 20, 30, 40],
  cmap: 'RYGYR',
  value: 60,
  units: 'mol',
  locale: 'de-DE'
}

export const Spacing = Template.bind({});
Spacing.args = {
  thresholds: [1.234, 20, 21],
  cmap: 'RYGYR',
  value: 60,
  units: 'mol',
  locale: 'de-DE'
}