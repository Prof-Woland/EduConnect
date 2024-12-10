import "./oneCourse.css"
export default function OneCourse({title,description}){
    return(
        <div className="oneCourseDiv">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <button className="addCourses">Добавить курс</button>
        </div>
    )
}