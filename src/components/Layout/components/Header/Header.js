import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Button from "~/components/Layout/components/Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="logo" />
          </div>
          <div className={cx("menu")}>
            <a href=".">
              <p>Find jobs</p>{" "}
            </a>
            <a href=".">
              <p>Company</p>{" "}
            </a>
          </div>
        </div>

        <div className={cx("action")}>
          <Button text={`Register`} bgc={`#1967d24d`} color={`#2557a7`} />
          <Button text={`Login`} />
        </div>
      </div>
    </header>
  );
}

export default Header;
