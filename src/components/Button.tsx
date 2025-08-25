import type { Btn } from "../types"
export default function Button({text, icon, onClick, type}: Btn){
    return(
        <button onClick={onClick} type={type}>
            {text && <span>{text}</span>}
            {icon && <span>{icon}</span>}
        </button>
    )
}