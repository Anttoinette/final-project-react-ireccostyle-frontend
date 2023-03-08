import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";




export default function FaceshapePage() {
    const { faceshapeId } = useParams() //useParams()??
    const [ recommendation, setRecommendation ] = useState("");

    useEffect( () => {
        fetch(`http://127.0.0.1:5002/faceshape/${faceshapeId}`)
      .then((res) => res.json()) //returns a promis w/ json data 
      .then((recommendation) => {
       setRecommendation(recommendation); //update the state with recieved data //_data
    //    .catch(console.error(err);
    })
}, [faceshapeId]);

return (
  <div>
    {recommendation ? (
      <div>
        <h2>{recommendation.title}</h2>
        <p>{recommendation.description}</p>
        <img src={recommendation.img} alt={recommendation.title} />
        <h3>{recommendation.recommendation}</h3>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}
// },[facceshapeId])
//     return (
//         <div>
//             {data ? (
//         <div>
//         <h2>{recommendation.title}</h2>
//         <p>{recommendation.description}</p>
//         <img src={img} alt={recommendation.title} />
//         <h3>{recommendation.recommendation}</h3>
//         </div>
//         </div>
//             )}
//     )