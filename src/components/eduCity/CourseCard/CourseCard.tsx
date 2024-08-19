import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import { COURSESIMGS } from "@assets/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const { courseItem, metaPart, price, category, title, btnPart } = styles;

const CourseCard = () => {
  return (
    <div className={`${courseItem}`}>
      <div className="img-part mb-4">
        <img src={COURSESIMGS.courseOne} className="w-100" />
      </div>
      <div className="content-part">
        <ul
          className={`${metaPart} mb-4 p-0 d-flex align-items-center justify-content-between`}
        >
          <li>
            <span className={`${price}`}>$40.00</span>
          </li>
          <li>
            <Link className={`${category}`} to="course-single">
              Web Development
            </Link>
          </li>
        </ul>
        <h3 className={`${title} fw-normal`}>
          <Link to="course-single">
            Become a PHP Master and Make Money Fast
          </Link>
        </h3>
        <div className="bottom-part">
          <div className="info-meta d-flex align-items-center justify-content-between">
            <ul className="d-flex align-items-center justify-content-between">
              <li className="user me-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="me-2"
                ></FontAwesomeIcon>
                <span>245</span>
              </li>
              <li className="ratings">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <span className="ms-2">(05)</span>
              </li>
            </ul>
            <div className={`${btnPart}`}>
              <Link to="course-single">
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
