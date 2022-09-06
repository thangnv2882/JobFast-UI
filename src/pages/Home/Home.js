import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Search from "~/components/Layout/components/Search";
import JobCard from "~/components/Layout/components/JobCard";
import Testimonial from "~/components/Layout/components/Testimonial";

const cx = classNames.bind(styles);

function Home() {

  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className={cx("layout")}>
      <div className={cx("home-explore")}>
        <h1 className={cx("title")}>Join us & Explore Thousands of Jobs</h1>
        <p className={cx("sub-title")}>
          Find Jobs, Employment & Career Opportunities
        </p>
        <Search />
        <div className={cx("popular-search")}>
          Popular search:
          <Link to={"."}> Web, </Link>
          <Link to={"."}>App, </Link>
          <Link to={"."}>Backend developer </Link>
        </div>
      </div>

      <div className={cx("job-categories")}>
        <h2 className={cx("title")}>Popular Job Categories</h2>
        <p className={cx("sub-title")}>2020 jobs live – 293 added today.</p>
        <div className={cx("cards")}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>

      <div className={cx("testimonials")}>
        <h2 className={cx("title")}>Testimonials From Our Customers</h2>
        <p className={cx("sub-title")}>
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.
        </p>
        <div className={cx("items")}>
          <Slider {...settings}>
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
