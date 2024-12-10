import { useEffect, useState } from "react"
import OneHotel from "./OneHotel"

import "./oneHotel.css"

import axios from 'axios';
export const mainHotel=[];

const RenderHotel=()=>{
   

    const [loading,setLoading]=useState(true);
    const [hotels,setHotels]=useState([]);



    
    async function fetchHotel() {
        setLoading(true)  
        const response =await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        const hotels=await response.data;    
        setHotels(hotels);
        setLoading(false)
       } 
   useEffect(()=>{
    fetchHotel();
   },[])
   const handleClickBron=(id,title)=>{
    const hotel={  id:id,
        title:title,}
        if(JSON.stringify(mainHotel).includes(JSON.stringify(hotel))==false){
             mainHotel.push(hotel)
            alert(`Hotel ${id} was broned `)

        }
}
const [currentPage,setCurrentPage]=useState(1);
    const totalPages=10
    const lastIndex=currentPage*totalPages;
    const firstIndex=lastIndex-totalPages;
const handlePageChange = (page) => {
        setCurrentPage(page);
   
  };
const currentHotels=hotels.slice(firstIndex,lastIndex);

    return (
    
         <>
        {loading && <p className="loadingHotel">Загрузка отелей...</p>}
        {!loading &&
        <>
        <div className="findHotel">
        <h1>Найти отель:</h1>
        <input type="text" className="control" {...input} placeholder="Введите название отеля"/>
        </div>
        <div className="Content">
            <div>
            {currentHotels.filter((hotel)=>hotel.title.toLowerCase().includes(input.value.toLocaleLowerCase())).map((hotel)=>{
                return(<OneHotel title={hotel.title} id={hotel.id} body={hotel.body} handleClick={handleClickBron}/>)
            })}
            </div>
        </div>

        </>
        }
        </>
    
    )
}


export default RenderHotel