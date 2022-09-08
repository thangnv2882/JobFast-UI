import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Button from "../../../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search({ home = false, find = false }) {
  const [searchWhatValue, setSearchWhatValue] = useState("");
  const [searchWhereValue, setSearchWhereValue] = useState("");

  const inputRefWhat = useRef();
  const inputRefWhere = useRef();

  const handleClearWhat = () => {
    setSearchWhatValue("");
    inputRefWhat.current.focus();
  }
  const handleClearWhere = () => {
    setSearchWhereValue("");
    inputRefWhere.current.focus();
  }

  const classes = [
    cx("wrapper", {
      home,
      find,
    }),
  ];
  return (
    <div className={classes}>
      <div className={cx("box")}>
        <label htmlFor="what">What</label>
        <input
          ref={inputRefWhat}
          value={searchWhatValue}
          id="what"
          placeholder="job title or company"
          spellCheck={false}
          onChange={(e) => setSearchWhatValue(e.target.value)}
        />
        {!!searchWhatValue && (
          <button
            className={cx("clear-icon")}
            onClick={handleClearWhat}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {!searchWhatValue && (
          <button className={cx("search-icon")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        )}
      </div>
      <div className={cx("box")}>
        <label htmlFor="where">Where</label>
        <input
          ref={inputRefWhere}
          value={searchWhereValue}
          id="where"
          placeholder="city or province"
          spellCheck={false}
          onChange={(e) => setSearchWhereValue(e.target.value)}
        />
        {!!searchWhereValue && (
          <button
            className={cx("clear-icon")}
            onClick={handleClearWhere}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {!searchWhereValue && (
          <button className={cx("location-icon")}>
            <FontAwesomeIcon icon={faLocationDot} />
          </button>
        )}
      </div>
      <Button primary>Find jobs</Button>
    </div>
  );
}

export default Search;
