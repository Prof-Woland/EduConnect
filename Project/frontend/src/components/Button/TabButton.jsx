import './TabButton.css'

export default function TabButton({children, isActive, ...props}){
    let classes = 'Button'

    if(isActive) classes+='_Active'

    return <button {...props} className = {classes}>{children}</button>
}