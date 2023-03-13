import afro3 from "../assets/afro3.webp";
import faceshape3 from "../assets/faceshape3.webp";
import afro1 from "../assets/afro1.webp";

export default function Hero() {
    return (
        <div id="hero">
            <img src={afro3} />
            <img src={faceshape3} />
            <img src={afro1} />
            {/* <img URL={https://i.pinimg.com/originals/04/18/65/04186559a7f7b87a38422cca622994fe.jpg} */}
        </div>
    );
}
