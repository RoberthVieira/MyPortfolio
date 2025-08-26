import type { Btn } from "../types"
export default function Button({text, icon, onClick, type, className}: Btn){
    return(
        <button onClick={onClick} type={type} className={className}>
            {text && <span>{text}</span>}
            {icon && <span>{icon}</span>}
        </button>
    )
}