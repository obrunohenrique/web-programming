import React, { useState } from "react";

export default function Objectform() {
    
    const [person, setPerson] = useState({
        firstName: "Bruno",
        lastName: "Pinto",
        email: "bhfp@cin.ufpe.br"
    })

    // "e" é o objeto que contém todas as informações sobre o evento que foi disparado!!!
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) { 
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
      }
    
    
    return (
        <>
      <label>
        First name:
        <input
            name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
        name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
        name="Email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
    )
}