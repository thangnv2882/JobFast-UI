import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button( {text, bgc, color} ) {
  return (
    <div className={cx("wrapper")}>
      <button className={cx("search-btn")} style={{backgroundColor: `${bgc}`, color: `${color}`}}> {text} </button>
    </div>
  );
}

export default Button;
