import './Footer.css'
import logo from './Log.png'

export default function Footer(){
    return(
        <>
            <div className="Footer">
                <div className='FooterContainer'>
                    <div className='FooterLeft'>
                        <button className='FooterButton'>Курсы</button>
                        <button className='FooterButton'>Стажировки</button>
                        <button className='FooterButton'>Профиль</button>
                    </div>
                    <div className='FooterRight'>
                        <div className='FooterRightT'>
                        <div>
                            <img src={logo} width={35} height={35} alt="" />
                        </div>
                            <div className='FooterLogoDiv'>
                                EduConnect - ключ к будущему
                            </div>
                            </div>
                            <div className='Contact'>
                                +7 123 456 7890<br/>
                                educonnect_org@mail.ru
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}