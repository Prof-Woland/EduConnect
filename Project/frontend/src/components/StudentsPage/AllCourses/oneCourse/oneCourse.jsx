import "./oneCourse.css"
export default function OneCourse({title,description}){
    return(
        <div className="oneCourseDiv">
            <div>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
            <div>
                <button className="addCourses">Добавить курс</button>
            </div>
        </div>
    )
}