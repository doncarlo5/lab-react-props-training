import React from "react";
import "./IdCard.css";

export default function IdCard(props) {
  return (
    <div className="id-card">
      <div className="profile-picture">
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className="profile-info">
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          {" "}
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
