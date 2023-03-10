// import { useState } from "react";
// import { collection, addDoc } from "firebase"

// export default function ReviewPage(reviews) {
//     // console.log("Review is", reviews)
//     const { reviewId } = useParams();
//     const [name, setName] = useState();
//     const [reviewsForm, setReviewForm] = useState();

//     const handleSubmit = async (element) => {
//         element.preventDefault ();

//         const reviews = collection(db, "reviews");

//         try {
//             const reviewId = await addDoc(reviews, { // or reviewPage
//                 name, 
//                 reviews,
//             });
//             console.log("Thanks for your review! Review Added! ", reviewId)
//             setName('');
//             setReviewForm('');
//         } catch(error) {
//             console.log("Error adding this review: ", err)
//         }
//     };
    
//     return (
//         <div>
//             {reviews  ? (
//                 <div>
//                     <h2>{reviews.review}</h2>
//                 </div>
//             ) : (
//                 <p>Loading your reviews ...</p>
//                 )
                
//             }
//         </div>
//     );
// }


//     // const reviews = collection(db, "reviews");

//     // const handleSubmit = aysnc (element) => {
//     //     element.preventDefault();
//     //     await addDoc(reviews, {name, reviews});
//     //     setName();
//     //     setReviewPage();
//     // };