import React from "react"
import "../style/Card.css"

export default function Card(props){

    return(
        <div>
    <div className="card">
        <section className="image-section">
    <img src={`${props.imageUrl}`} alt="" className="card-image"></img>
    </section>
    <section className="content-section">
    <section className="location-map">
    <span className="card-location">{props.location}</span>
    <span><a href={props.googleMapsUrl} className="card-map">View on Google Maps</a></span>  
      </section>
    <h2 className="card-title">{props.title}</h2>
    <h3 className="card-date">{props.startDate} - {props.endDate}</h3>
    <p className="card-description">{props.description}</p>
    </section>
    
    </div>
  
        <hr style={{display:"flex",width: "478px",height: "0px", left: "40px", top: "286px",border: "1px solid #F5F5F5"}} />
    </div>
       
    )
}