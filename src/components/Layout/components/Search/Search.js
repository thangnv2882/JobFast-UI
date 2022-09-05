import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box")}>
        <label htmlFor="what">What</label>
        <input
          id="what"
          placeholder="job title or company"
          spellCheck={false}
        />
        <button className={cx("clear-icon")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <button className={cx("search-icon")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={cx("box")}>
        <label htmlFor="where">Where</label>
        <input id="where" placeholder="city or province" spellCheck={false} />
        <button className={cx("clear-icon")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <button className={cx("location-icon")}>
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
      </div>
      <Button text={`Find jobs`} />
    </div>
  );
}

export default Search;
