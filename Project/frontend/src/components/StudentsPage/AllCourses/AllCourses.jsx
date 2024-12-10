import { useEffect, useState } from "react"
import OneCourse from "./oneCourse/oneCourse";
import "./AllCourses.css"
import axios from "axios"
import useInput from "../../hooks/useInput";
export const mainCourses=[];


export default function AllCourses(){
    const searchCourse=useInput('');
    const [allCourses,setAllCourses]=useState([]);
    const [loading,setLoading]=useState(true)

    async function getAllCourses() {
        setLoading(true);
        const data = await axios.get("http://localhost:8000/getAllCourses");
        const courses = data.request;
        const response = courses.response;
        setAllCourses(JSON.parse(response));
        setLoading(false);
    } 
   useEffect(()=>{
    getAllCourses();      
   },[])

    function addCourse(name,description){
        const course={ 
             name:name,
             description:description,
        }
            if(JSON.stringify(mainCourses).includes(JSON.stringify(course))==false){
                mainCourses.push(course);
                alert(`Subject ${name} was broned `);
            }
            console.log(mainCourses);
    }

   
 return(
    <>
    <div className="allCurses">
    <div className="inputDiv">
        <input {...searchCourse} placeholder="Найти курс" className="searchInput" />
    </div>
    <div>
        {loading&&<div>Загрузка курсов...</div>}

        <div>
            {!loading&&
            <div>
                {allCourses.filter((course)=>course.name.toLowerCase().includes(searchCourse.value.toLocaleLowerCase())).map((course)=>{
                    return(
                        <OneCourse title={course.name} description={course.description} onClick={addCourse} children={"Добавить курс"} />
                    )
                })}
            </div>}
        </div>
        </div>
    </div>
    </>
 )
}