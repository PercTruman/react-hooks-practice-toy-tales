import React, {useState} from "react";

function ToyForm({handleAddToy}) {

  const [toyForm, setToyForm] = useState({
    toyName: '',
    toyImage: ''
  })
  
  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/toys',{
      method: 'POST',
      headers:{
          "Content-Type":"application/json",
          },
      body:JSON.stringify(toyForm)
        })
  .then(res =>res.json())
  .then(addedToy=>handleAddToy(addedToy))
  }

  function handleChange(e){
    const key = e.target
    setToyForm({...toyForm, [key]:e.target.value})
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value = {toyForm.toyName}
          onChange = {handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={toyForm.toyImage}
          onChange = {handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
