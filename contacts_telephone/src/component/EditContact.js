import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    // console.log("edit ", props);
    const { id, Name, Email } = props.location.state.contact;
    this.state = {
      id,
      Name,
      Email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.Name === "" || this.state.Email === "") {
      alert("Mandatory to fill the field");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ Name: "", Email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form onSubmit={this.update}>
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            />
          </div>
          <br></br>
          <Button variant="contained" type="submit">
            Update
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/">
            <Button variant="contained">BACK TO CONTACT LSIT</Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditContact;
