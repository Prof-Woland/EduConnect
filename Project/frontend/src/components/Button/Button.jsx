import './Button.css'

export default function Button({onClick,children, isActive, ...props}){
    let classes = 'button'

    if(isActive) classes+='_active'

    return <button onClick={onClick} {...props} className = {classes}>{children}</button>
}