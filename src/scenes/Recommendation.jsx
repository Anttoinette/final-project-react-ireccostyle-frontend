import Col from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"


export default function Recommendation ({recommendation}) {
        // const { title, description, img, Recommendation, Id } = props
console.log(recommendation)
        return (
        <main>
        <div>
          {!recommendation ? (
            <p>Select a shape to see recommendations</p>
          ) : !recommendation ? ( //if no data show loading
            <p>Loading...</p>
          ) : (
            <div className="info">
                <div key={recommendation.Id}>
                  <h2>{recommendation.title}</h2>
                  <p>{recommendation.description}</p>
                  <img src={recommendation.picture} alt={recommendation.title} />
                  <h3>{recommendation.recommendation}</h3>
                </div> 
                </div>
              )}
        </div>
      </main>
    );
  }
  
// export default function getRecco (props) {
//     const { title, description, img, Recommendation, Id } = props
//     return (
//         <main>
//             <div>
//                 !data 
//                 ?(<p>Waitnig for your recommendation...</p>)
//                 :{data.map(element => (
//                     key={element.Id}
//                     <h2>{element.title}</h2>
//                     <p>{element.description}</p>
//                     <img src={element.img} alt={title} />
//                     <h3>{element.Recommendation}</h3>
//                 ))}
//             </div>
//         </main>
//     );

// }

// return (
  
//   <div key={faceshape.Id}>
//     <h2>{faceshape.title}</h2>
//     <p>{faceshape.description}</p>
//     <img src={img} alt={title} />
//     <h3>{faceshape.Recommendation}</h3>
//   </div>
// );

 
// useEffect(() => {
//     async function getOvalFaceshapes() {
//       const ovalFaceshape = await faceshapes('oval');
//       setOvalFaceshapes(ovalFaceshape);
//     }

//     getOvalFaceshapes(faceshape);
//   }, []);

//   return (
   
//   );
// } 

// import { useEffect, useState } from 'react';
// import { getOvalFaceshapes } from '.Recommendation.jsx';

// import Experience from "./Experience";

// function faceshape() {
//     const [ovalFaceshapes, setOvalFaceshapes] = useState([]);
  
//    async function handleClick(faceshape) {
//     
//     }
