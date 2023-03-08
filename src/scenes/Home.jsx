
import Hero from "../components/Hero"
import Instructions from "../components/Instructions"
import Buttons from "../components/Buttons"
import LearnMore from "./LearnMore.jsx"
// functional component
export default function Home() {
        return (
                <div className="home-title" >
                <Hero />
                <Instructions />
                <Buttons /> 
                <LearnMore />



                </div>
        )
}