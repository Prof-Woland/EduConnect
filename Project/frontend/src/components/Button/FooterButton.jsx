import './HeaderPopButton.css'

export default function FooterButton({children, isActive, ...props}){
    let classes = 'PopButton'

    if(isActive) classes+='_active'

    return <button {...props} className = 'FooterBut'>{children}</button>
}