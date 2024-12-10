import { useState, useEffect } from "react"
import { mainCourses } from "../AllCourses/AllCourses.jsx"
// import OneCourse from "../AllCourses/oneCourse/oneCourse"
import OneMainCourse from "./oneMainCourses.jsx";

export default function MainPage(){
    const [mainCoursePage,setMainCoursePage]=useState(mainCourses);
    
    useEffect(()=>{
        setMainCoursePage(mainCourses);
    },[mainCoursePage])

    const handleClick=(name)=>{
        alert("Бронь отменена")
        for(let i=0;i<mainCourses.length;i++){
            if(mainCourses[i].name==name){
                mainCourses.splice(i, 1);
            }
        }

        setMainCoursePage(JSON.stringify((mainCoursePage) => ({...mainCoursePage, mainCourses})));
        console.log(mainCoursePage);
    }



    return(
    <div className="mainPage">
        <h1 className="mainPageTitle">Здесь находятся ваши курсы:</h1>
        {mainCoursePage&&mainCoursePage.map((course)=>{
                if(course.description!==null&&course.name!==null){
                     return(
                    <>
                    <OneMainCourse name={course.name} description={course.description} handleClick={handleClick}/>    
                    </>            
            )
        }
})}
    </div>
    )

}