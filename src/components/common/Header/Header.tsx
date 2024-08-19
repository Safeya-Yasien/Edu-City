import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";

const {
  topHeader,
  topHeaderContent,
  topHeaderAuth,
  nav,
  navLink,
  navbar,
  cartIcon,
} = styles;

const Header = () => {
  return (
    <header >
      <div className={topHeader}>
        <Container>
          <div
            className={`${topHeaderContent} d-flex align-items-center justify-content-between`}
          >
            <div className="topHeaderInfo d-flex gap-3">
              <span>Email: example@example.com</span>
              <span>Phone: (123) 456-7890</span>
            </div>
            <div className={topHeaderAuth}>
              <Nav className={nav}>
                <Nav.Link className={navLink} as={NavLink} to="login">
                  Login
                </Nav.Link>
                <Nav.Link className={navLink} as={NavLink} to="register">
                  Register
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </Container>
      </div>
      <Navbar className={navbar}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="courses">
              Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact
            </Nav.Link>
            <Button className={cartIcon} variant="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
