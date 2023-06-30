import React, { useState } from "react";
import "./index.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour card">
      <div className="card-details">
        <img src={image} alt="name" />
        <div className="card-des">
          <h4 className="text-title">{name}</h4>
          <h5 className="tour-price">₹{price}</h5>
        </div>
        <p className="text-info">
          {readMore ? info : `${info.substring(0, 250)}...`}
          <button onClick={()=> setReadMore(!readMore)}>
           { readMore?'show less':'read more'};
          </button>
        </p>
      </div>
      <button className="card-button" onClick={()=> removeTour(id)}>Not Intrested </button>
       
    </article>
  )
}

export default Tour;