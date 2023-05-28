import BasicButton from "./BasicButton";

export default {
    title: 'Basic Button',
    component: BasicButton,
    argTypes: {
        iconPosition: {
            options: ['left', 'right', null],
            control: {type: 'inline-radio'},
            description: 'Status of the button.'
        },
        iconType: {
            options: ['arrow', 'spinner', null],
            control: {type: 'inline-radio'},
            description: 'Status of the button.'
        },
        type: {
            options: ['solid', 'empty'],
            control: {type: 'inline-radio'},
            description: 'Status of the button.'            
        }
    }
}

const Template  = (args) => <BasicButton {...args}/>

export const Base= Template.bind({})
Base.args = {
    // status: 'default',
    children: 'Label',
    type: 'solid',
    disabled: false,
    iconPosition: null,
    iconType: 'arrow',
}

export const Disabled= Template.bind({})
Disabled.args = {
    // status: 'default',
    children: 'Label',
    type: 'solid',
    disabled: true,
    iconPosition: 'right',
    iconType: 'spinner',
}

export const NoLabel= Template.bind({})
NoLabel.args = {
    children: 'Test',
    type: 'empty',
    disabled: false,
    iconPosition: 'left',
    iconType: 'arrow',
}