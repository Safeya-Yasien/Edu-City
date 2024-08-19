import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import sharedStyles from "@styles/components/shared.module.scss";
import Input from "@components/Form/Input/Input";

const { authBox, submitBtn, users } = sharedStyles;

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className={`${authBox}`}>
          <div className="text-center">
            <h2 className="mb-4">Login</h2>
          </div>
          <form>
            <Row>
              <Col lg={12}>
                <Input type="email" name="email" placeholder="E-mail" />
              </Col>
              <Col lg={12}>
                <Input type="password" name="password" placeholder="Password" />
              </Col>
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <button type="submit" className={`${submitBtn}`}>
                  <span>login</span>
                </button>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <div className={`${users}`}>
                  Not registered? <Link to="/register">Create an account</Link>
                </div>
              </div>
            </Row>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
