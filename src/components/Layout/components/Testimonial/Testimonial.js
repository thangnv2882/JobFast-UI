import classNames from "classnames/bind";
import styles from "./Testimonial.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Testimonial() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Awesome Design</h2>
      <p className={cx("sub-title")}>
        Without JobHunt i’d be homeless, they found me a job and got me sorted
        out quickly with everything! Can’t quite… 
      </p>
      <div className={cx("user-testimonial")}>
        <div>
          <img
            src="https://blog.kdata.vn/wp-content/uploads/2022/02/cach-them-user-va-xoa-user-khoi-group-linux.jpg"
            alt="avatar"
          />
        </div>
        <div className={cx("user-info")}>
          <p className={cx("user-name")}>Name</p>
          <p className={cx("job")}> Designer </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
