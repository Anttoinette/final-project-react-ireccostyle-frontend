import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://final-project-ireccostyle-api.web.app/reviews`, {
    // fetch(`http://127.0.0.1:5002/reviews`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({newReview})
    })
   .then(res => res.json())
    .then(setReviews)
      .catch(console.error)
      console.log(newReview)
  }
  
  console.log(reviews);

  return (
    <div className="review-page-container">
      <h1>Review Page</h1>
      <Form className="form">
        <Form.Group>
          <Form.Label> Review: </Form.Label>
          <Form.Control
            name="review"
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>

      <div>
        <h2>Your newest review</h2>
               {reviews?.map((element) => {
  return (<p key={element.reviewId}> {element.newReview} </p>)
 })}
      </div>
    </div>
  );
}

//        {reviews?.map((element) => {
//  return (<p key={element.id}> {element.review} </p>)
// })}
// import { useEffect, useState } from "react";
// import { getAllReviews } from "./api/reviews";
// import Reviews from "./Reviews";

// function App() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5002/reviews`)
//     async function fetchReviews() {
//       const reviews = await getAllReviews();
//       setReviews(reviews);
//     }

//     fetchReviews();
//   }, []);

//   return (
//     <div>
//       <h1>Reviews</h1>
//       <Reviews reviews={reviews} />
//     </div>
//   );
// }
// export default App;