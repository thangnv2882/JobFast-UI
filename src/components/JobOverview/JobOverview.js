import classNames from "classnames/bind";
import styles from "./JobOverview.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeart1 } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faHeart as faHeart2 } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function JobOverview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img src={data.avatar} alt="avatar" />
      <div className={cx("job-info")}>
        <p className={cx("job-name")}> {data.name} </p>
        <p className={cx("job-company")}> {data.company} </p>
        <p className={cx("job-address")}> {data.address} </p>
      </div>
      <div className={cx("right")}>
        <div className={cx('action')}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className={cx("time-up")}>
          <p> {data.createAt} </p>
        </div>
      </div>
    </div>
  );
}

export default JobOverview;
