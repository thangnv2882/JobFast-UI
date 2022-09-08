import classNames from "classnames/bind";
import styles from "./JobDetail.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFlag,
  faLocationDot,
  faMinus,
  faMoneyBill,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);

function JobDetail({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("detail-overview")}>
        <p className={cx("job-name")}>{data.jobName}</p>
        <div className={cx("job-info")}>
          <p className={cx("job-company")}>{data.company}</p>
          <FontAwesomeIcon className={cx("center")} icon={faMinus} />
          <p className={cx("job-createAt")}>{data.createAt}</p>
        </div>
        <div className={cx("job-type", "flex")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <p> {data.jobType} </p>
        </div>
        <div className={cx("job-amount", "flex")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <p> {data.numberOfRecruitments} persons. </p>
        </div>
        <div className={cx("job-location", "flex")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p> {data.jobLocation} </p>
        </div>
        <div className={cx("job-salary-1", "flex")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faMoneyBill} />
          </div>
          <p> {data.salary} </p>
        </div>
        <div className={cx("action")}>
          <Button primary>Apply Now</Button>
          <Button register>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </div>
      <div className={cx("detail-content")}>
        <div className={cx("job-description")}>
          <p className={cx("title")}>Full Job Description</p>
          <p className={cx("detail")}>{data.jobDescription}</p>
          <div>
            <p className={cx("sub-title")}>Requirements and Skills:</p>
            <p className={cx("detail")}>{data.jobRequirements}</p>
          </div>
          <div>
            <p className={cx("sub-title")}>Job Type:</p>
            <p className={cx("detail")}>{data.jobType}</p>
          </div>
          <div>
            <p className={cx("sub-title")}>Working Hours: </p>
            <p className={cx("detail")}>{data.workingHours}</p>
          </div>
          <div>
            <p className={cx("sub-title")}>Salary: </p>
            <p className={cx("detail")}>{data.salary} per month</p>
          </div>
        </div>
      </div>
      <div className={cx("detail-footer")}>
        <p className={cx("createAt")}>Posted at {data.createAt}</p>
        <Button filter leftIcon={<FontAwesomeIcon icon={faFlag} />}>
          <p className={cx("report-job")}>Report job</p>
        </Button>
      </div>
    </div>
  );
}

export default JobDetail;
