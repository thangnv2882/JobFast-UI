import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Button from "~/components/Button";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <Link to={"."} className={cx("logo")}>
            <img src={images.logo} alt="logo" />
          </Link>
          <div className={cx("menu")}>
            <Link to={"."}>Find jobs</Link>
            <Link to={"."}>Company</Link>
          </div>
        </div>

        <div className={cx("action")}>
          <Button register>Register</Button>
          <Button primary>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
