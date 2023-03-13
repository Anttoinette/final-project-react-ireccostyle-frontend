import { Badge } from "react-bootstrap";
import blacklogo from "../assets/blacklogo.png"

export default function Header() {
    return (
        <header className="header-page">
            <h1><Badge bg="yellow">Ireccostyle</Badge></h1>
            <img src={blacklogo} />
        </header>
    )
}