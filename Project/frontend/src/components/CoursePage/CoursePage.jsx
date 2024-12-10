import './CoursePage.css'

export default function CoursePage(title, description, lections){
    let tit = 'Title';
    let desc = 'Description';
    let lect='LectionsList';
    return(
        <>
        <div className="CoursePageBack">
            <div className='CoursePageContainer'>
                <div className="courseHead">
                    <div className="courseTitle">{tit}</div>
                    <div className="courseDescription">{desc}</div>
                </div>
                <div>
                    <div className='lectionsTitle'>Лекции:</div>
                    <div className="courseContent">
                        {/* {lections.map((lection)=>{})} */lect}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}