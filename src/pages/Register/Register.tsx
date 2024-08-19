import { Link } from "react-router-dom";

import sharedStyles from "@styles/components/shared.module.scss";

import Input from "@components/Form/Input/Input";
import { Col, Row } from "react-bootstrap";

const { authBox, submitBtn, users } = sharedStyles;

const Register = () => {
  return (
    <section>
      <div className="container">
        <div className={`${authBox}`}>
          <div className="text-center">
            <h2 className="mb-4 ">Create New Account</h2>
          </div>
          <form>
            <Row>
              <Col lg={12}>
                <Input type="text" name="firstName" placeholder="First Name" />
              </Col>
              <Col lg={12}>
                <Input type="text" name="lastName" placeholder="Last Name" />
              </Col>
              <Col lg={12}>
                <Input type="email" name="email" placeholder="Email Address" />
              </Col>
              <Col lg={12}>
                <Input type="text" name="username" placeholder="Username" />
              </Col>
              <Col lg={12}>
                <Input type="password" name="password" placeholder="Password" />
              </Col>
              <Col lg={12}>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </Col>
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <button type="submit" className={`${submitBtn}`}>
                  <span>Sign Up</span>
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <div className={`${users}`}>
                  Already have an account? <Link to="/login">Sign In</Link>
                </div>
              </div>
            </Row>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
