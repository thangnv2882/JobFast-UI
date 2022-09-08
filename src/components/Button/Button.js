import classNames from "classnames/bind";
import styles from "./Button.module.scss";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  register = false,
  filter = false,
  children,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = "button";

  const classes = cx("wrapper", {
    primary,
    register,
    filter,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <div>
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
    </div>
  );
}

export default Button;
