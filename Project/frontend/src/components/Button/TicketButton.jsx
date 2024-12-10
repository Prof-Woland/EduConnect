import './TicketButton.css'

export default function TicketButton({children,onClick}){
    return(    
        <button  onClick={onClick} className = 'TickButton'>{children}</button>
    )
}