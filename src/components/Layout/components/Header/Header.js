import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Button from "~/components/Button";
import config from "~/config";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <Link to={config.routes.home} className={cx("logo")}>
            <img src={images.logo} alt="logo" />
          </Link>
          <div className={cx("menu")}>
            <Link to={config.routes.findJob}>Find jobs</Link>
            <Link to={config.routes.companies}>Company</Link>
          </div>
        </div>

        <div className={cx("action")}>
          <Button register to={config.routes.login}>Register</Button>
          <Button primary to={config.routes.login}>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
