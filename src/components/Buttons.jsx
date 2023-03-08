import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import NavBar from "./NavBar";
import Recommendation from "../scenes/Recommendation.jsx";

export default function FaceshapeButtons() {
  
  const [data, setData] = useState("")
  const [shape, setShape] = useState("")
  const getRecco = (faceshape) => {
      // fetch(`https://final-project-ireccostyle-api.web.app/faceshape/${shape}`)
      fetch(`http://127.0.0.1:5002/faceshape/${faceshape}`)
      .then(res => res.json())
      .then((_data) => {
       console.log(_data)

       console.log('des', _data.description)
      })
      .catch(console.error)
  };
// const object = {
//   name:"max",
//   age:23
// }

// console.log(object.age)
  return (
    <>
      <div>
        <Button onClick={() => getRecco('oval')}>OVAL</Button>

        <Button onClick={() => getRecco('square')}>SQUARE</Button>

        <Button onClick={() => getRecco('heart')}>HEART</Button>

        <Button onClick={() => getRecco('diamond')}>DIAMOND</Button>

        <Button onClick={() => getRecco('circle')}>CIRCLE</Button>
      </div>
      <Recommendation data={data} />
    </>
  );
}

