
import "./oneHotel.css"

const oneHotel=({title,body,id,handleClick})=>{
    return(
        <div className="oneHotelDiv">
            <div>
                <div className="titleDiv">
                <h2>{id}. </h2>
                <h2>{title}</h2>
                
                </div> 
                <p>{body}</p>
            </div>
            <button className="bronBtn" onClick={()=>handleClick(id,title)}> Забронировать</button>
        </div>
    )
}

export default oneHotel;