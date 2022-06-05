import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList]=useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(toyData=>setToyList(toyData))
  },[]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    const updatedToyList = [...toyList, newToy]
    setToyList(updatedToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList}/>
    </>
  );
}

export default App;
