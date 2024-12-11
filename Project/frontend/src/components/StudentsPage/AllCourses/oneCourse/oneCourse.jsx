import "./oneCourse.css"
import Modal from "../../../Modal/Modal";
import { useState } from "react";
export default function OneCourse({title,description,onClick,children, lections}){
    const urezDescr=description.substring(0,70)+"...";

    return(
        <div className="oneCourseDiv" >
            <div>
                <p className="title">{title}</p>
                <p className="description">{urezDescr}</p>
            </div>
            <div>
                <button className="addCourses" onClick={()=>onClick(title,description,lections)}>{children}</button>
            </div>
        </div>
    )
}