import './ModalCloseButton.css'

export default function ModalCloseButton({children, isActive, ...props}){
    return <button {...props} className = 'modalCloseButton'>{children}</button>
}