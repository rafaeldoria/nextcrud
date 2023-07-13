interface InputProps {
    type: 'text' | 'number'
    text: string
    value: any
    readonly?: boolean
    className?: string
    changeValue?: (value:any) => void
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.changeValue?.(e.target.value)}
                className={`
                    border border-slate-400 rounded-lg
                    focus:outline-none bg-emerald-300
                    px-4 py-2
                    ${props.readonly ? '' : 'focus:bg-emerald-100'}
                `}
            />
        </div>
    )
}