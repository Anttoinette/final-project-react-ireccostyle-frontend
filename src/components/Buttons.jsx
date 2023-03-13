import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import NavBar from "./NavBar";
import Recommendation from "../scenes/Recommendation.jsx";
import { Navigate } from "react-router-dom";

export default function FaceshapeButtons() {
  
  // const [data, setData] = useState("") //using a state hook intial st value 0 re-renders wn st changed
  // const [shape, setShape] = useState("")
  const [recommendation, setRecommendation] = useState("")
  const getRecco = (faceshape) => {
    // Navigate(`/faceshape/${faceshape}`)
      fetch(`https://final-project-ireccostyle-api.web.app/faceshape/${faceshape}`)
      // fetch(`http://127.0.0.1:5002/faceshape/${faceshape}`)
      .then(res => res.json()) //returns a promis w/ json data 
      .then((recommendation) => {
       setRecommendation(recommendation); //update the state with recieved data //_data

      //  console.log('des', _data.description)
      })
      .catch(console.error) //make sure the state is being updated correctly
  };
// const object = {
//   name:"max",
//   age:23
// }
// button compononet that has an onclick event who calls the getrecoo func argument oval
// console.log(object.age)
  return (
    <>
      <div>
      <Recommendation recommendation={recommendation} />

        <Button onClick={() => getRecco('oval')}>OVAL</Button> 
      
        <Button onClick={() => getRecco('square')}>SQUARE</Button>

        <Button onClick={() => getRecco('heart')}>HEART</Button>

        <Button onClick={() => getRecco('diamond')}>DIAMOND</Button>

        <Button onClick={() => getRecco('circle')}>ROUND</Button>
      </div>
    </>
  );
}

