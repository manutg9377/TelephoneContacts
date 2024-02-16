import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const ContactList = (props) => {
  const inputE1 = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactsId(id);
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
    //console.log(inputE1.current.value);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      clickHandler={deleteContactHandler}
    />
  ));

  return (
    <div>
      <h2>
        Contact List
        <Link to="/add">
          <button>Add contact</button>
        </Link>
      </h2>
      <div>
        <TextField
          inputRef={inputE1}
          id="outlined-basic"
          label="SEARCH"
          value={props.term}
          onChange={getSearchTerm}
        />
        <CheckBoxOutlineBlankIcon />
      </div>
      <div>
        {renderContactList.length > 0
          ? renderContactList
          : "no contacts available"}
      </div>
    </div>
  );
};

export default ContactList;
