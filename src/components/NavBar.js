import Nav from "react-bootstrap/Nav"
import { NavLink  } from "react-bootstrap"
// import { Navbar } from "react-bootstrap"

export default function NavBar() {
    return (
        <Nav className="justify-content-center flex-row nav-color">
    <Nav.Item>
        <NavLink href="/">
            Home
        </NavLink>
    </Nav.Item>
    
    <Nav.Item>
        <NavLink href="/About">
            About
        </NavLink>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/reviews">
        Leave A Review
        </Nav.Link>
    </Nav.Item>
    </Nav>

    )
}