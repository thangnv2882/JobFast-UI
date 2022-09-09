import { useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Search from "../../components/Layout/components/Search";
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./FindJob.module.scss";
import JobOverview from "~/components/JobOverview";
import JobDetail from "../../components/JobDetail";

const cx = classNames.bind(styles);

function FindJob() {
  let searchText = "backend";

  const [jobActive, setJobActive] = useState(1);
  const [showFilter, setShowFilter] = useState("hide");

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

  const dataJob = [
    {
      id: "1",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh A++",
      company: "Cong ty A",
      jobLocation: "Ha Noi A",
      createAt: "22/2/2222",
      salary: "5,300,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
      jobDescription:
        "Our company - Hexa Property Management, owns its headquarters in Houston, Texas. We provide accommodations which satisfy people's demands and budget for their best-staying experience. Our operation has prospered to 15 apartment communities of over 613 units In the last decade, Hexa Property Management had demonstrated a vigorous reputation for its excellent service through the clients’ nomination and loyalty. We take responsibility for addressing any of our clients’ problems efficiently and in a professional manner. Plus, we dedicate a great value of commitment and professionalism to every property we operate with. At Hexa, you will find our core values of promoting an environment of diversity, tolerance, inclusion, and equality for all our members, associates, and clients. We strive to foster a workplace that is free of discrimination of any sort, be it religious, cultural, or gender, and one which is safe for all. Hexa Team strongly believes that these very values have helped strengthen our brand awareness amongst our industrial rivals.",
      jobRequirements: "HTML, CSS, JS, Java",
      workingHours: "8:00 - 17:00, Mon - Fri",
    },
    {
      id: "2",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh B++",
      company: "Cong ty B",
      jobLocation: "Ha Noi B",
      createAt: "22/2/2222",
      salary: "6,000,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
    },
    {
      id: "3",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh C++",
      company: "Cong ty C",
      jobLocation: "Ha Noi C",
      createAt: "22/2/2222",
      salary: "10,500,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
    },
    {
      id: "4",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh C++",
      company: "Cong ty C",
      jobLocation: "Ha Noi C",
      createAt: "22/2/2222",
      salary: "10,500,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
    },
    {
      id: "5",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh C++",
      company: "Cong ty C",
      jobLocation: "Ha Noi C",
      createAt: "22/2/2222",
      salary: "10,500,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
    },
    {
      id: "6",
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      jobName: "Lap trinh C++",
      company: "Cong ty C",
      jobLocation: "Ha Noi C",
      createAt: "22/2/2222",
      salary: "10,500,000 VND",
      jobType: "Full Time",
      numberOfRecruitments: "10",
    },
  ];

  // const handleJob = () => {
  //   setJobActive(index);
  // }
  const [filterSelection, setFilterSelection] = useState();
  // const handleFilter = () => {
  // };

  return (
    <div>
      <div className={cx("layout")}>
        <Search find />
        <div className={cx("search-filter")}>
          {dataFilter.map((result, index) => (
            <Tippy
              key={index}
              placement={"bottom-start"}
              interactive
              render={(attrs) => (
                <div className="filter-result" tabIndex="-1" {...attrs}>
                  {result.sub.map((sub, index) => (
                    <PopperWrapper key={index}>
                      <p
                        onClick={() => {
                          setFilterSelection(sub);
                        }}
                      >
                        {sub}
                      </p>
                    </PopperWrapper>
                  ))}
                </div>
              )}
            >
              <div className={cx("filter-name")}>
                <Button
                  children={ filterSelection || result.title}
                  key={index}
                  filter
                  rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                  onClick={() => {
                    setShowFilter("show");
                  }}
                >
                  
                </Button>
              </div>
            </Tippy>
          ))}

        </div>
        <div className={cx("search-result")}>
          <div className={cx("job-overview")}>
            {!!searchText && (
              <p className={cx("search-text")}>{searchText} jobs</p>
            )}
            {dataJob.map((result) => (
              <JobOverview
                data={result}
                key={result.id}
                onClick={() => {
                  setJobActive(result.id);
                }}
              />
            ))}
          </div>
          <div className={cx("job-detail")}>
            <JobDetail data={dataJob.find((job) => job.id == jobActive)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
