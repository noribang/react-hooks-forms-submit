import React, { useState } from "react";

function Form() {
  /* Create state. State value. State setter function. */
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  /* Event handlers passed as props. */
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(firstName)
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  /* onSubmit event handler. */
  function handleSubmit(event) {
    // Prevent default page reload.
    event.preventDefault();
    /* first name is required. */
    if (firstName.length > 0) {
      // Get object values from state values.
      const formData = {
        firstName: firstName,
        lastName: lastName
      } 
      const dataArray = [...submittedData, formData];
      console.log(dataArray)
      /* Change state. */
      setSubmittedData(dataArray);
      // Send form state values from object.
      // props.sendFormDataSomewhere(formData);
      /* Call setter functions to clear input fields. */ 
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"])
    }

  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  /* JSX */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Event listener. Event handler. State value. */}
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error messages. */}
      {errors.length > 0 
        ? errors.map((error, index) => (
          <p key={index} style={{ color: "red"}}>
            {error}
          </p>
        )) 
        : null}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
