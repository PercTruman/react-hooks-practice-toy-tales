import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList,onHandleDelete, addLike}) {

  const originalToyCards=toyList.map(toy=>
    <ToyCard 
        key={toy.id}
        id={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        onHandleDelete={onHandleDelete}
        addLike={addLike}
        />
        )
  
  return (
    <div id="toy-collection">{originalToyCards}</div>
  );
}

export default ToyContainer;
