// import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Search from "../../components/Layout/components/Search";
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./FindJob.module.scss";
import JobOverview from "~/components/JobOverview";

const cx = classNames.bind(styles);

function FindJob() {

  let searchText = "backend"

  const dataFilter = [
    {
      title: "Date Posted",
      sub: ["1 ngay", "2 ngay"],
    },
    {
      title: "Salary",
      sub: [" 1000", "2000", "50000"],
    },
    {
      title: "Job Types",
      sub: ["part time", "full time"],
    },
  ];

  const dataJob = [
    {
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      name: "Lap trinh A++",
      company: "Cong ty A",
      address: "Ha Noi A",
      createAt: "22/2/2222",
    },
    {
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      name: "Lap trinh B++",
      company: "Cong ty B",
      address: "Ha Noi B",
      createAt: "22/2/2222",
    },
    {
      avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700",
      name: "Lap trinh C++",
      company: "Cong ty C",
      address: "Ha Noi C",
      createAt: "22/2/2222",
    },
  ];

  return (
    <div>
      <div className={cx("layout")}>
        <Search find />
        <div className={cx("search-filter")}>
          {dataFilter.map((result, index) => (
            <Tippy
              key={index}
              // visible={filterSearch.title}
              placement={"bottom-start"}
              interactive
              render={(attrs) => (
                <div className="filter-result" tabIndex="-1" {...attrs}>
                  {result.sub.map((sub, index) => (
                    <PopperWrapper key={index}>
                      <p>{sub}</p>
                    </PopperWrapper>
                  ))}
                </div>
              )}
            >
              <div className={cx("filter-name")}>
                <Button
                  key={index}
                  filter
                  rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                >
                  {result.title}
                </Button>
              </div>
            </Tippy>
          ))}
        </div>
        <div className={cx("search-result")}>
          <div className={cx("job-overview")}>
            {searchText && <p>{searchText} jobs</p>}
            {dataJob.map((result, index) => (
              <JobOverview data={result} key={index} />
            ))}
          </div>
          <div className={cx("job-details")}></div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
