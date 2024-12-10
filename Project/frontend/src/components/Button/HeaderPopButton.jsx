import './HeaderPopButton.css'

export default function HeaderPopButton({children, isActive, ...props}){
    let classes = 'PopButton'

    if(isActive) classes+='_active'

    return <button {...props} className = {classes}>{children}</button>
}