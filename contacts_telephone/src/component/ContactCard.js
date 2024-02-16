import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ContactCard = (props) => {
  const mystyle = {
    width: "25px",
  };
  const { id, Name, Email } = props.contact;
  // console.log("props", props.contact);
  return (
    <div>
      <div>
        <img style={mystyle} src={user} alt="user"></img>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div>{Name}</div>
          <div>{Email}</div>
        </Link>
      </div>
      <div style={{ color: "red" }}>
        <DeleteForeverIcon onClick={() => props.clickHandler(id)} />
      </div>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      </Link>
    </div>
  );
};

export default ContactCard;
