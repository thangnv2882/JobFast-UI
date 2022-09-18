import classNames from "classnames/bind";
import styles from "./Button.module.scss";

import { Link } from "react-router-dom";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useState } from "react";

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
  show,
  ...passProps
}) {
  const [filterSelection, setFilterSelection] = useState();

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

  const dataFilter = [
    {
      title: "Date Posted",
      sub: ["1 ngay", "2 ngay"],
    },
    {
      title: "Salary",
      sub: ["1000", "2000", "50000"],
    },
    {
      title: "Job Types",
      sub: ["part time", "full time"],
    },
  ];

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
