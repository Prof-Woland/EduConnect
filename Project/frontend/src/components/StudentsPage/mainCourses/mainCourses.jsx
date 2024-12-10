import { useState, useEffect } from "react"
import { mainCourses } from "../AllCourses/AllCourses.jsx"
// import OneCourse from "../AllCourses/oneCourse/oneCourse"
import OneMainCourse from "./oneMainCourses.jsx";

export default function MainPage(){
    const [mainCoursePage,setMainCoursePage]=useState(mainCourses);

    const handleClick=(title)=>{
        alert("Бронь отменена");
        for(let i=0;i<mainCourses.length;i++){
            if(mainCourses[i].name==title){
                mainCourses[i]={name:'',description:''};
            }
        }
        setMainCoursePage(mainCourses);
    }
    return(
    <div className="mainPage">
        <h1 className="mainPageTitle">Здесь находятся ваши курсы:</h1>
        {mainCoursePage.map((course)=>{
                if(course.description!==''&&course.name!==''){
                     return(
                    <OneMainCourse title={course.name}
                    description={course.description} onClick={handleClick} children={"Убрать курс"}/>                
            )
        }
    })}
    </div>
    )
}