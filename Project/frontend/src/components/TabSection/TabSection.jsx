import TabButton from "../Button/TabButton"
import heart from './Heart.svg'
import './TabSection.css'

export default function TabSection({active, onChange}){
    return(
        <div className='Tab'>
            <TabButton isActive={active === 'avaliable'} onClick={()=> onChange('avaliable')}>Доступные</TabButton>
            <TabButton isActive={active === 'chosen'} onClick={()=> onChange('chosen')}>Избранные</TabButton>
        </div>
    )
}