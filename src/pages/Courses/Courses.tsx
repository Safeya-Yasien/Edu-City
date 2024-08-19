import { CourseCard, SearchWidget, WidgetTitle } from "@components/eduCity";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faListUl,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

const {
  widgetArea,
  filterWidget,
  radioBox,
  checkBox,
  customButton,
  courseSearchPart,
  viewIcons,
  viewGrid,
  viewList,
  customSelectBox,
  paginationArea,
  paginationPart,
  active,
} = styles;

const Courses = () => {
  return (
    <div className="courses">
      <Row>
        <Col md={12} lg={4}>
          <div className={`${widgetArea}`}>
            <SearchWidget />
            {/* archive "filter" */}
            <div className="widget-archives widgetCard mb-5">
              <WidgetTitle title={"Filter By"} />
              <div className={`${filterWidget}`}>
                <div className="filter-form">
                  <form>
                    <div className="single-filter mb-4">
                      <h5>Skill Level</h5>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="skill"
                          id="type1"
                          defaultValue="beginner"
                          checked
                        />
                        <label htmlFor="type1">Beginner</label>
                      </div>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="skill"
                          id="type2"
                          defaultValue="intermediate"
                        />
                        <label htmlFor="type2">Intermediate</label>
                      </div>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="skill"
                          id="type3"
                          defaultValue="expert"
                        />
                        <label htmlFor="type3">Expert</label>
                      </div>
                    </div>
                    <div className="single-filter mb-4">
                      <h5>Price Level</h5>
                      <div className={`${radioBox} form-group`}>
                        <input type="radio" name="price" />
                        <label htmlFor="type4">Free (14)</label>
                      </div>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="price"
                          id="type5"
                          defaultValue="paid"
                        />
                        <label htmlFor="type5">Paid (26)</label>
                      </div>
                    </div>
                    <div className="single-filter mb-4">
                      <h5>Duration Time</h5>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="duration"
                          id="type6"
                          defaultValue="six"
                        />
                        <label htmlFor="type6">5+ hours (30)</label>
                      </div>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="duration"
                          id="type7"
                          defaultValue="paid"
                        />
                        <label htmlFor="type7">10+ hours (20)</label>
                      </div>
                      <div className={`${radioBox} form-group`}>
                        <input
                          type="radio"
                          name="duration"
                          id="type8"
                          defaultValue="paid"
                        />
                        <label htmlFor="type8">15+ hours (5)</label>
                      </div>
                    </div>
                    <div className="single-filter mb-4">
                      <h5>Course Type</h5>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check1"
                          defaultValue="check1"
                        />
                        <label htmlFor="check1">Backend (3)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check2"
                          defaultValue="check2"
                        />
                        <label htmlFor="check2">CSS (6)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check3"
                          defaultValue="check3"
                        />
                        <label htmlFor="check3">Frontend (8)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check4"
                          defaultValue="check4"
                        />
                        <label htmlFor="check4">General (3)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check5"
                          defaultValue="check5"
                        />
                        <label htmlFor="check5">Photography (7)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check6"
                          defaultValue="check6"
                        />
                        <label htmlFor="check6">Photography (4)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          name="course"
                          id="check7"
                          defaultValue="check7"
                        />
                        <label htmlFor="check7">Technology (5)</label>
                      </div>
                    </div>
                    <div className="single-filter mb-5">
                      <h5>Instructor</h5>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check8"
                          name="check8"
                          defaultValue="check8"
                        />
                        <label htmlFor="check8">Stuard (5)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check9"
                          name="check9"
                          defaultValue="check9"
                        />
                        <label htmlFor="check9">Benjamin (4)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check10"
                          name="check10"
                          defaultValue="check10"
                        />
                        <label htmlFor="check10">Mickel (7)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check11"
                          name="check11"
                          defaultValue="check11"
                        />
                        <label htmlFor="check11">Johnson (2)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check12"
                          name="check12"
                          defaultValue="check12"
                        />
                        <label htmlFor="check12">Elijabeth (5)</label>
                      </div>
                      <div className={`${checkBox} form-group mb-0`}>
                        <input
                          type="checkbox"
                          id="check13"
                          name="check13"
                          defaultValue="check13"
                        />
                        <label htmlFor="check13">Rebeka (4)</label>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        className={`${customButton} `}
                        type="submit"
                        defaultValue="Submit Now"
                        value="Submit Now"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} lg={8} className="lg-ps-5 md-ps-0">
          <div
            className={`${courseSearchPart} d-flex justify-content-between mb-5`}
          >
            <div className="course-view-part d-flex align-items-center justify-content-between">
              <div className={`${viewIcons}`}>
                <button className={`${viewGrid} me-3`}>
                  <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
                </button>
                <button className={`${viewList}`}>
                  <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>
                </button>
              </div>
              <div className="view-text">Showing 1-9 of 11 results</div>
            </div>
            <div className="type-form">
              <form>
                <div className="form-group mb-0">
                  <div className={`${customSelectBox}`}>
                    <select id="timing">
                      <option>Default</option>
                      <option>Newest</option>
                      <option>Old</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="course-part">
            <Row>
              <Col lg={6} className="mb-4">
                <CourseCard />
              </Col>
              <Col lg={6}>
                <CourseCard />
              </Col>
            </Row>
          </div>
          <div className={`${paginationArea}  text-center mt-5 md-mt-0`}>
            <ul className={`${paginationPart}`}>
              <li className={active}>
                <a href="/course">1</a>
              </li>
              <li>
                <a className="d-flex" href="/course">
                  2
                </a>
              </li>
              <li>
                <a href="/course" className="d-flex align-items-center">
                  Next
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
