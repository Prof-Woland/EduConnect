import './OneInterShip/OneInterShip.css'
import OneInterShip from "./OneInterShip/OneInterShip"

export default function InterShipPafe(){
    const interShips=[
        {
            title:"It-Tech",
            time:"6 месяцев",
            prof:"Техник-программист"
        },
        {
            title:"Itransition",
            time:"6 месяцев",
            prof:"Техник-программист"
        },  {
            title:"EPAM",
            time:"6 месяцев",
            prof:"Инженер-программист"
        },  {
            title:"Unitsky String Technologies",
            time:"9 месяцев",
            prof:"Инженер-технолог"
        },  {
            title:"Wargaming",
            time:"3 месяца",
            prof:"Инженер-программист"
        },  {
            title:"Lesta",
            time:"9 месяцев",
            prof:"Game-дизанйер"
        }
    ]
    return(
        <div className='inP'>
            <div className='inTit'>
                Стажировки
            </div>
            <div className='in'>
        <div className="div">{interShips.map((ship)=>{
            return(
                <OneInterShip title={ship.title} description={ship.description} prof={ship.prof}/>
            )
            })}
        </div>
            <div className='right'>
                <p>Стажировки в IT-компаниях — это не только шанс получить ценный опыт работы, но и уникальная возможность войти в мир технологий, познакомиться с современными инструментами и методами разработки. Это путь к профессиональному росту, где студенты и молодые специалисты могут применить свои знания на практике, участвовать в реальных проектах и учиться у опытных коллег. IT-стажировки открывают двери в мир инноваций, где каждый день решаются сложные задачи, а результаты работы влияют на развитие мировой индустрии. Это не просто обучение, а возможность проявить себя, показать свои навыки и заинтересовать будущего работодателя. Для многих стажировки становятся первым шагом к успешной карьере в крупных IT-компаниях. Выбор стажировки — это инвестиция в свое будущее, где знания, опыт и контакты становятся ключевыми ресурсами для достижения целей.</p>
            </div>
        </div>
        </div>
    )
}