import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
const { heroSection, customButton } = styles;

import { HOMEIMGS } from "@assets/imgs";

const Home = () => {
  return (
    <div className={heroSection}>
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="mb-5">
            <h1 className="mb-5">Education & Traning Organization</h1>
            <p className="fs-5">
              Discover a wide range of engaging e-learning courses designed to
              help you succeed.
            </p>
          </div>
          <div className="d-flex align-items-center gap-4">
            <Link to="#courses" className={`${customButton} btn fw-bold`}>
              Get Started
            </Link>
            <button className={`${customButton} btn fw-bold`}>
              Explore Courses
            </button>
          </div>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <img
            src={HOMEIMGS.hero}
            alt="hero"
            className="w-100"
            loading="lazy"
          ></img>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
