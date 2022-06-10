import React, { useState } from "react";

function Form() {
  /* Create state. State value. State setter function. */
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  /* Event handlers passed as props. */
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
    const dataArray = [...submittedData, formData];
    console.log(dataArray)
    setSubmittedData(dataArray);
    // Send form state values from object.
    // props.sendFormDataSomewhere(formData);
    
    // Call setter functions to clear input fields. 
    setFirstName("");
    setLastName("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Event listener. Event handler. State value. */}
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
