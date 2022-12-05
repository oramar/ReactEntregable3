import React from "react";
import './styles/LocationInfo.css'
const LocationInfo = ({ location }) => {
  return (
    <article className="card-location ">
      <h2 className="card-location__name">{location?.name}</h2>
      <ul className="card-location__list">
        <li className="card-location__item ">
          <span className="card-location__item-type">Type: </span>
          {location?.type}
        </li>
        <li className="card-location__item ">
          <span  className="card-location__item-dimension" >Dimension: </span>
          {location?.dimension}
        </li>
        <li className="card-location__item ">
          <span className="card-location__item-population" >Population: </span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
