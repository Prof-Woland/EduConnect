

export default function OneMainCourse({title,description,onClick,children}){
    return(
        <div className="oneCourseDiv">
            <div>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
            <div>
                <button className="addCourses" onClick={()=>onClick(title,description)}>{children}</button>
            </div>
        </div>
    )
}