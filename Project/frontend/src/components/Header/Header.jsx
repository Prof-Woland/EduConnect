import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import logo from './Log.png'

export default function Header(){
    const navigate = useNavigate();
    return(
        <>
            <div className="HeaderBack">
                <div className="HeaderLeft">
                    <div className="HeaderLogo">
                        <img src={logo} alt="" width={70} height={70}/>
                    </div>
                    <div className="HeaderTitle">
                        EduConnect
                    </div>
                </div>
                <div className="HeaderNav">
                    <div>
                        <button className='NavButton' onClick={() => navigate('/courses', { replace: true })}>
                            Курсы
                        </button>
                        <button className='NavButton' onClick={() => navigate('/interships', { replace: true})}>
                            Стажировки
                        </button>
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