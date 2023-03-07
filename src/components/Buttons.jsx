import { useState } from "react";
import { Button } from "react-bootstrap";

export default function FaceshapeButtons() {
  const [faceshape, setFaceshape] = useState()
  const [data, setData] = useState()
  const getRecco = (shape) => {
      fetch(`https://final-project-ireccostyle-api.web.app/faceshape/${shape}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
      // Do something with the data
    console.log(shape)
  };
  return (
    <>
      <div>
        <Button onClick={() => getRecco("oval")}>OVAL</Button>

        <Button onClick={() => getRecco("square")}>SQUARE</Button>

        <Button onClick={() => getRecco("round")}>ROUND</Button>

        <Button onClick={() => getRecco("diamond")}>DIAMOND</Button>

        <Button onClick={() => getRecco("circle")}>CIRCLE</Button>
      </div>
    </>
  );
}

// return (
  
//   <div key={faceshape.Id}>
//     <h2>{faceshape.title}</h2>
//     <p>{faceshape.description}</p>
//     <img src={img} alt={title} />
//     <h3>{faceshape.Recommendation}</h3>
//   </div>
// );