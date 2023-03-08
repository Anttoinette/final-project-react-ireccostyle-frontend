import Col from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"


export default function Recommendation ({data}) {
        // const { title, description, img, Recommendation, Id } = props

        return (
        <main>
        <div>
          {!data ? (
            <p>Select a shape to see recommendations</p>
          ) : !data ? ( //if no data show loading
            <p>Loading...</p>
          ) : (
            <div>
              {data.map((element) => ( //maps through the data
                <div key={element.Id}>
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                  <img src={element.img} alt={element.title} />
                  <h3>{element.Recommendation}</h3>
                </div> //add button for reviews pop-up module
              ))}
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
