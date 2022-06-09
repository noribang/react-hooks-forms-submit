import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  /* onSubmit event handler. */
  function handleSubmit(event) {
    // Prevent default page reload.
    event.preventDefault();
    // Get object values from state values.
    const formData = {
      firstName: firstName,
      lastName: lastName
    } 
    // Send form state values from object.
    // props.sendFormDataSomewhere(formData);
    
    // Call setter functions to clear input fields. 
    setFirstName("");
    setLastName("");
  }

  return (
    /* Event listener. */
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
