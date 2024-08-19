import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
import WidgetTitle from "../WidgetTitle/WidgetTitle";

const { searchWidget, searchWrap, searchInput } = styles;

const SearchWidget = () => {
  return (
    <div className={`${searchWidget} widgetCard mb-5`}>
      <WidgetTitle title={"Course Search"} />
      <div className={`${searchWrap} position-relative`}>
        <input
          type="search"
          placeholder="Searching..."
          name="search"
          className={searchInput}
        />
        <button type="submit" value="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;
