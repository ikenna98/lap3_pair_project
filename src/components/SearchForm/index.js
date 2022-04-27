import React, { useState } from 'react'

function SearchForm({ getResult }) {

  const [user, setUser] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    getResult(user);
  }

  const updateInput = e => {
    const input = e.target.value; 
    setUser(input);
  }
  return (
    <form onSubmit={handleSubmit} >
        <input type="text" onChange={updateInput} placeholder='Enter GitHub Username' />
        <input type="submit" style={{cursor:'pointer'}} value="Search" />
    </form>
    )
}

export default SearchForm
