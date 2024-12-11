import './CoursePage.css'

export default function CoursePage({title, description, lections}){
    return(
        <>
        <div className="CoursePageBack">
            <div className='CoursePageContainer'>
                <div className="courseHead">
                    <div className="courseTitle">{title}</div>
                    <div className="courseDescription">{description}</div>
                </div>
                <div>
                    <div className='lectionsTitle'>Лекции:</div>
                    <div className="courseContent">
                        {lections.map((lection)=>{
                            return(
                                <>
                                {lection}
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}