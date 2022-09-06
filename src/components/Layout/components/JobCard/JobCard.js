import classNames from "classnames/bind";
import styles from "./JobCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function JobCard() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <FontAwesomeIcon icon={faCoins} />
      </div>
      <div className={cx("card-info")}>
        <p className={cx("card-name")}>Accounting / Finance</p>
        <p className={cx("card-nums")}> (1 open position) </p>
      </div>
    </div>
  );
}

export default JobCard;
