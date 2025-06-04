import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#about">Jane Doe</Navbar.Brand>
        <div className="text-white d-flex flex-column align-items-end">
          <div>
            <i className="bi bi-envelope-fill me-2"></i> lakabra@gmail.com
          </div>
          <div>
            <i className="bi bi-telephone-fill me-2"></i> +57 3126876238
          </div>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#recommendations">Recommendations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
