import { useEffect, useState } from "react"
import OneCourse from "./oneCourse/oneCourse";
import "./AllCourses.css"
import axios from "axios"
export default function AllCourses(){
    const [allCourses,setAllCourses]=useState([]);
    const [loading,setLoading]=useState(true)

    async function getAllCourses() {
        setLoading(true);
        const data = await axios.get("http://localhost:8000/getAllCourses");
        const courses = data.request;
        const response = courses.response;
        setAllCourses(response);

        // setAllCourses([
        //     {
        //         title:'qwerty',
        //         description:'qwertyuio',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     },
        //     {
        //         title:'2',
        //         description:'22222222',
        //     }
        // ])

        setLoading(false);

      } 
   useEffect(()=>{
    getAllCourses();   
    
   },[])
  
 return(
    <>
    <div className="allCurses">
        {loading&&<div>Загрузка курсов...</div>}

        <div>
            {!loading&&
            <div>
                {allCourses.map((course)=>{
                    return(
                        <OneCourse title={course.title} description={course.description}/>
                    )
                })}
            </div>}
        </div>
    </div>
    </>
 )
}