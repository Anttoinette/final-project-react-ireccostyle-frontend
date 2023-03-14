import Nav from "react-bootstrap/Nav"
import { NavLink  } from "react-bootstrap"
// import { Navbar } from "react-bootstrap"

export default function NavBar() {
    return (
        <Nav className="justify-content-center flex-row nav-color">
    <Nav.Item>
        <NavLink className="nav-color" href="/">
            Home
        </NavLink>
    </Nav.Item>
    
    <Nav.Item>
        <NavLink className="nav-color" href="/About">
            About
        </NavLink>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link className="nav-color" href="/reviews">
        Leave A Review
        </Nav.Link>
    </Nav.Item>
    </Nav>

    )
}