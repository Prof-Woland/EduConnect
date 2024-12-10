import AllCourses from "./AllCourses/AllCourses"
import "./StudentsPage.css"


export default function StudentsPage({}){

return(
    <>
    <div className="YoupPageDiv">
        <h1 className="YoupPageDivH1">Ваша страница:</h1>
    </div>
    <div className="YourPageDescription">
        <div>
            <h2>Доступные курсы:</h2>
            <AllCourses/>
        </div>
        <div>
            <h2>Ваши курсы:</h2>
        </div>
        
    </div>
    
    </>
)
}