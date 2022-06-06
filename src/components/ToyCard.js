import React, {useState, useEffect} from "react";

function ToyCard({id, name, image, likes, onHandleDelete}) {
  const [newLikes, setNewLikes] = useState(likes);

  function addLike() {
    setNewLikes((likes)=>likes + 1)
  }

    useEffect(()=>{
      fetch(`http://localhost:3001/toys/${id}`,
      {
       method: "PATCH",
       headers:{
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ 'likes': newLikes})
     })
   }, [id, newLikes] )


  function handleClick(){
   onHandleDelete(id)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={addLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
