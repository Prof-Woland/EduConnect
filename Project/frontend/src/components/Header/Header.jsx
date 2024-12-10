import './Header.css'
import logo from './Log.png'

export default function Header(){
    return(
        <>
            <div className="HeaderBack">
                <div className="HeaderLeft">
                    <div className="HeaderLogo">
                        <img src={logo} alt="" width={100} height={100}/>
                    </div>
                    <div className="HeaderTitle">
                        EduConnect
                    </div>
                </div>
                <div className="HeaderNav">
                    <div>
                        <button className='NavButton'>
                            Профиль
                        </button>
                        <button className='NavButton'>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}