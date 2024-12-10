

export default function OneMainCourse({name,description,handleClick}){
    return(
        <div className="oneCourseDiv">
            <div>
                <p className="title">{name}</p>
                <p className="description">{description}</p>
            </div>
            <div>
                <button className="addCourses" onClick={()=>handleClick(name)}>Убрать курс</button>
            </div>
        </div>
    )
}