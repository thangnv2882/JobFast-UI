import classNames from "classnames/bind";
import styles from "./JobOverview.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeart1 } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisVertical,
  faHeart as faHeart2,
  faMoneyBill, 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import routes from "~/config/routes";
const cx = classNames.bind(styles);

function JobOverview({ data, onClick }) {

  const props = {
    onClick
  };

  return (
    <div className={cx("wrapper")} {...props}>
      <img src={data.avatar} alt="avatar" />
      <div className={cx("job-info")}>
        <p className={cx("job-name")}> {data.jobName} </p>
        <Link to={`${routes.company}${data.id}`} className={cx("job-company")} > {data.company} </Link>
        <p className={cx("job-address")}> {data.jobLocation} </p>
        <div className={cx("job-salary")}>
          <FontAwesomeIcon icon={faMoneyBill} />
          <span> {data.salary} </span> 
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("action")}>
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
