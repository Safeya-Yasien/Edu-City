import { Header } from "@components/common";

import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import styles from "./styles.module.scss";

const {  homeWrapper } = styles;

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header />
      <div className={` py-5 ${isHomePage ? homeWrapper : ""}`}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default MainLayout;
