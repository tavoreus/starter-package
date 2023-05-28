import '../../themes'
import Arrow from './Arrow'
import Spinner from './Spinner'

function getIcon(iconName) {
    switch (iconName) {
        case 'arrow':
            return <span className="px-2"><Arrow/></span>
            break;
        case 'spinner':
            return <span className="animate-spin px-2"><Spinner/></span>
            break;        
        default:
            return <></>
            break;
    }
}

export default function BasicButton(props) {

    if (props.type == 'solid') {
        var states = {
            'default': 'mavie-bg-yellow-dark mavie-shadow-16-light mavie-text-green-dark mavie-fill-green-dark',
            'hover': 'hover:mavie-bg-yellow-light hover:mavie-text-green-dark',
            'disabled': 'disabled:mavie-bg-gray-soft disabled:mavie-text-gray-medium disabled:mavie-fill-gray-medium disabled:shadow-none',
        }
    } else {
        var states = {
            'default': 'mavie-bg-white mavie-shadow-16-light mavie-text-green-dark mavie-fill-green-dark',
            'hover': 'hover:mavie-bg-beige-light hover:mavie-text-green-dark',
            'disabled': 'disabled:mavie-bg-gray-soft disabled:mavie-text-gray-medium disabled:mavie-fill-gray-medium disabled:shadow-none',
        }
    }
    const cls = Object.values(states).join(' ')


    return (
        <button disabled={props.disabled} 
        className={`inline-flex items-center mavie-font-sans py-4 px-6 mavie-rounded-4xl mavie-font-semibold ${cls}`}>
                {props.iconPosition == 'left' ? getIcon(props.iconType) : ''}
                {props.children.length ?
                <span className='px-2'>{props.children}</span>:
                ''}
                {props.iconPosition == 'right' ? getIcon(props.iconType) : ''}
        </button>
    )
}