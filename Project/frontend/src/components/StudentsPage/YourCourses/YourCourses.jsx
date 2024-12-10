

import OneCourse from "../AllCourses/oneCourse/oneCourse"
export default function YourCourses({yourCourses,setYourCourses}){
    return(

        <>
        {yourCourses.map((oneCourse)=>{
            return(
                <OneCourse title={oneCourse.title} description={oneCourse.description}/>
            )
        })}
        </>


    )
}