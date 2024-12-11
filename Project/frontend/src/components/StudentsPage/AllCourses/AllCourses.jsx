import { useEffect, useState } from "react"
import OneCourse from "./oneCourse/oneCourse";
import "./AllCourses.css"
import axios from "axios"
import useInput from "../../hooks/useInput";
import MainPage from "../mainCourses/mainCourses";
export const mainCourses=[];


export default function AllCourses(){
    let accessToken = 'ukgweyiyicgigiycgkhvJHFTUfyjfuxyg';
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

    function addCourse(name,description,lections){
        const course={ 
             name:name,
             description:description,
             lections:lections,
        }
            if(JSON.stringify(mainCourses).includes(JSON.stringify(course))==false){
                mainCourses.push(course);
                alert(`Subject ${name} was broned `);
            }
            console.log(mainCourses);
    }

//     async function getAllCourses() {
//     setLoading(true);
//     const data = await axios.get("http://localhost:8000/getAllCourses", {speed: 'Fast, very fast'}, {headers: { Authorization: `Bearer ${accessToken}` },})    
//.then(response => {
//     if (response.status == 401){updateTokens()}).catch(error => console.error(error))
//         }
//     };
//     const courses = data.request;
//     const response = courses.response;
//     setAllCourses(JSON.parse(response));

// } 
// async function getFavoiteCourses() {
//     const data = await axios.get("http://localhost:8000/getFavoriteCourses", {speed: 'Fast, very fast'}, {headers: { Authorization: `Bearer ${accessToken}` },}).then(response => {
//     if (response.status == 401){updateTokens()}).catch(error => console.error(error))
//         }
//     };
//     const courses = data.request;
//     const response = courses.response;
//     mainCourses=JSON.parse(response);
//     setLoading(false);
// } 
// useEffect(()=>{
// getAllCourses();      
// getFavoiteCourses();
// },[])

// async function addCourse(name,description){
//     const course={ 
//          name:name,
//          description:description,
//     }
//         if(JSON.stringify(mainCourses).includes(JSON.stringify(course))==false){
//             mainCourses.push(course);
//             alert(Subject ${name} was broned );
//         }
//         console.log(mainCourses);

//    await axios.post("http://localhost:8000/addFavoriteCourse",course, {speed: 'Fast, very fast'}, {headers: { Authorization: `Bearer ${accessToken}` },}).then(response => {
//     if (response.status == 401){updateTokens()}).catch(error => console.error(error));    
// }

   
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
                        <OneCourse lections={course.lectures} title={course.name} description={course.description} onClick={addCourse} children={"Добавить курс"}/>
                    )
                })}
            </div>}
        </div>
        </div>
    </div>

  
    </>
 )
}


