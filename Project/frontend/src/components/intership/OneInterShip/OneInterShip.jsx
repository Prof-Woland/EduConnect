import './OneInterShip.css'

export default function OneInterShip({title, description, prof}){
    return(
    
        <div className="oneCourseDiv">
            <div>
                <p className="title">
                    {title}
                </p>
                <p className="description">
                    {prof}
                </p>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    
    )
}