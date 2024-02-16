import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import EditContact from "./EditContact";

const history = createBrowserHistory();

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const retrievedContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts((prevContacts) => [...prevContacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, Name, Email } = response.data;
    setContacts((prevContacts) =>
      prevContacts.map((c) => (c.id === id ? response.data : c))
    );
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        // return Object.values(contacts);
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    const getContacts = async () => {
      const allContacts = await retrievedContacts();
      if (allContacts) setContacts(allContacts);
    };
    getContacts();
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactsId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
