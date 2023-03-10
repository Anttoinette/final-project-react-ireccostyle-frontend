import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Reviews() {
  const [reviews, setReviews] = useState("");
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5002/reviews`)
      .then((res) => res.json())
      .then(setReviews) //gets the newest review
      .catch((err) => alert(err));
  }, [setReviews]);

  console.log(newReview);

  return (
    <>
      <h1>Review Page</h1>
      <Form>
        <Form.Group>
          <Form.Label> Review: </Form.Label>
          <Form.Control
            name="review"
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
        </Form.Group>
        <Button>Submit</Button>
      </Form>

      <div>
        <h2>Your newest review</h2>
        {reviews.map((element) => {
           return <p key={element.id}>{element.review}</p>
        })}
      </div>
    </>
  );

  // return (
  //     <section>
  //         <article>
  //             <div id="reviews" >
  //                 <h1>Reviews</h1>
  //             </div>
  //         </article>
  //     </section>
  // );
}
