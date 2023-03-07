  
export default function getRecco (props) {
    const { title, description, img, Recommendation, Id } = props
    return (
        <main>
            <div>
                {/* !data 
                ?(<p>Waitnig for your recommendation...</p>)
                :{data.map(element => (
                    key={element.Id}
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    <img src={element.img} alt={title} />
                    <h3>{element.Recommendation}</h3>
                ))} */}
            </div>
        </main>
    );

}


 
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
