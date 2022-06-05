import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList}) {

  const originalToyCards=toyList.map(toy=>
    <ToyCard 
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        />
        )
  
  return (
    <div id="toy-collection">{originalToyCards}</div>
  );
}

export default ToyContainer;
