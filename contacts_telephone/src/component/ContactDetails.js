import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ContactDetails = (props) => {
  const mystyle = {
    width: "25px",
  };
  return (
    <>
      <div>
        <div>
          <img style={mystyle} src={user} alt="user"></img>
        </div>
        <div>
          <div>MANU</div>
          <div>MANu@gmail.com</div>
        </div>
      </div>
      <Link to="/">
        <Button variant="contained">BACK TO CONTACT LSIT</Button>
      </Link>
    </>
  );
};

export default ContactDetails;
