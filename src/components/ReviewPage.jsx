// import { useState, useEffect } from "react";
// export default function ReviewPage( {} ) { //setReviews ??
// //   const [reviews, setReviews] = useState("");
// const [reviews, setReviews] = useState("")
// const [newReview, setNewReview] = useState("") // ?

// const handleReviewSubmit = () => {
//   const newReview = {
//     done: false,
//     reviews: reviews,
//   };
//   setReviews('')
//   fetch(`http://127.0.0.1:5002/reviews/`, { //${reviews}
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newReview),
//   })
//     .then((res) => res.json())
//     .then((setReviews) => {
//         // setReviews("");
//         // setNewReview(newReview)
//     })
//    .catch(alert("Review Was Not Added "));
//     // .then(setReviews(reviewInput))
// };
// }
// const handleReviewSubmit = () => {
//   if (!reviews) {
//     alert("Please enter a review");
//     return;
//   }
// }

//     useEffect (() => {
//         fetch(`http://127.0.0.1:5002/reviews/review`)
//         .then((res) => res.json())
//         .then((newReview) => {
//             setReviews(newReview.review);
//             setNewReview(newReview);
//         })  //gets the newest review
//         .catch(() => alert("review not fetched"))
//     },[reviews]);


//     return (
//         <>
//          <h1>Review Page</h1>
//          <form>
//             <label>
//                 Review: 
//                 <textarea
//                 value={reviews}
//                 onChange={(element) => setReviews(element.target.value)}
//                 />
//             </label>
//             <button type="button" onClick={handleReviewSubmit}>
//             Submit</button>
//          </form>
//          {newReview (
//             <div>
//                 <h2>Your newest review</h2>
//                 <p>{newReview.reviews}</p>
//             </div>
//          )}
//         </>
//       );
// }


// import { collection, addDoc } from

// export default function ReviewPage() {
//     const [ name, setName ] = useState("");

//     useEffect(() => {
//         const reviews = collection(db, "reviews");
//     })