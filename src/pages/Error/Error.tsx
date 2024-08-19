import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import "./styles.module.scss";

const Error = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link to="/" replace={true} className="fw-bold">
          How about going back to safety?
        </Link>
      </div>
    </Container>
  );
};

export default Error;
