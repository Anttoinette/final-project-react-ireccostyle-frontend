
import Hero from "../components/Hero"
import Instructions from "../components/Instructions"
import Buttons from "../components/Buttons"
// functional component
export default function Home() {
        return (
                <div className="home-title" >
                <Hero />
                <Instructions />
                <Buttons /> 
                </div>
        )
}