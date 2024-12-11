import { useState, useEffect } from "react"
import { mainCourses } from "../AllCourses/AllCourses.jsx"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './mainCourses.css'
// import OneCourse from "../AllCourses/oneCourse/oneCourse"
import OneMainCourse from "./oneMainCourses.jsx";

export default function MainPage(){
    // let accessToken = localStorage.getItem(accessToken);
    const [mainCoursePage,setMainCoursePage]=useState(mainCourses);

    // function updateTokens() {

    //     axios.post('Ваш url', { refresh: localStorage.getitem('refreshToken')})
      
    //     .then(response => {
      
    //         const newAccessToken = response.data.access;
      
    //         const newRefreshToken = response.data.refresh;
      
    //         localStorage.setItem('accessToken', newAccessToken)
      
    //         localStorage.setItem('refreshToken', newRefreshToken)
      
         
      
    //     })
      
    //     .catch(error => {
      
    //         console.error('Ошибка при обновлении токена:', error);
      
    //     })
      
    //   } 
    
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

    // const handleClick=(name)=>{
    //     alert("Бронь отменена")
    //     for(let i=0;i<mainCourses.length;i++){
    //         if(mainCourses[i].name==name){
    //             mainCourses.splice(i, 1);
    //             axios.delete(`http://localhost:8000/deleteFavoriteCourse/${name}`, {speed: 'Fast, very fast'}, {headers: { Authorization: `Bearer ${accessToken}` },})
    //.then(response => {
    //     if (response.status == 401){updateTokens()}).catch(error => console.error(error))
    //         }
    //     }

    //     setMainCoursePage(JSON.stringify((mainCoursePage) => ({...mainCoursePage, mainCourses})));
    //     console.log(mainCoursePage);
    // }


    return(
    <div className="mainPage">
        <h1 className="mainPageTitle">Здесь находятся ваши курсы:</h1>
        <div className="mainPageCont">
        {mainCoursePage&&mainCoursePage.map((course)=>{
            console.log(course)
                if(course.description!==null&&course.name!==null){
                     return(
                    <>
                    <OneMainCourse name={course.name} description={course.description} handleClick={handleClick} lections={course.lections}/>    
                    </>            
            )
        }
})}</div>
    </div>
    )

}