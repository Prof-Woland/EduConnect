import { useState } from "react";
import Modal from "../../Modal/Modal.jsx";
import CoursePage from "../../CoursePage/CoursePage.jsx";

export default function OneMainCourse({name,description,handleClick, lections}){
    const urezDescr=description.substring(0,70)+"...";
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return(
        <div className="oneCourseDiv" >
            <div onClick = {openModal}>
                <p className="title">{name}</p>
                <p className="description">{urezDescr}</p>
            </div>
            <div>
                <button className="addCourses" onClick={()=>handleClick(name)}>Убрать курс</button>
            </div>
            <Modal isOpen={open} onClose={closeModal}>
                <CoursePage title={name} description={description} lections={['a','b']}/>
            </Modal>
        </div>
    )
}