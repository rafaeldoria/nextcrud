interface ButtonProps {
    collor?: string
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {

    const collor = props.collor ?? 'green'

    return (
        <button 
            onClick={props.onClick}
            className={`
                text-teal-50 px-4 py-2 rounded-md 
                bg-gradient-to-r
                from-${collor}-400 to-${collor}-700
                ${props.className}
            `}>
            {props.children}
        </button>
    )
}