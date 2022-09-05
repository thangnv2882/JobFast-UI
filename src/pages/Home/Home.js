import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Search from '~/components/Layout/components/Search'

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('home-explore')}>
      <h1>Join us & Explore Thousands of Jobs</h1>
      <p>Find Jobs, Employment & Career Opportunities</p>
      <Search />
    </div>
  );
}

export default Home;
