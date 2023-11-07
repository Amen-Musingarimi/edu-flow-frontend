import React from 'react';
import classes from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsBuildingFillAdd, BsCheckAll } from 'react-icons/bs';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaUsers, FaUsersCog, FaUserCog, FaUserPlus } from 'react-icons/fa';
import { FcInvite } from 'react-icons/fc';
import { MdAnnouncement, MdReportProblem } from 'react-icons/md';
import { BiSolidLogOut, BiBookOpen, BiSolidBookOpen } from 'react-icons/bi';
import { TfiAnnouncement } from 'react-icons/tfi';
import { PiUsersFourFill } from 'react-icons/pi';
import { FcDataConfiguration } from 'react-icons/fc';

const SideBar = () => {
  return (
    <nav className={classes.sideBarContainer}>
      <h3 className={classes.logo}>Bradey High</h3>
      <div className={classes.linksContainer}>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>HOME</p>
          <Link className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Dashboard</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>REPORTS</p>
          <Link className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Exam Schedule</p>
          </Link>
          <Link className={classes.homeLink}>
            <BsCheckAll />
            <p className={classes.homeText}>Marks</p>
          </Link>
          <Link className={classes.homeLink}>
            <BiBookOpen />
            <p className={classes.homeText}>End of Month Report</p>
          </Link>
          <Link className={classes.homeLink}>
            <BiSolidBookOpen />
            <p className={classes.homeText}>End of Term Report</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>STUDENTS</p>
          <Link className={classes.homeLink}>
            <FaUsers />
            <p className={classes.homeText}>My Class</p>
          </Link>
          <Link className={classes.homeLink}>
            <PiUsersFourFill />
            <p className={classes.homeText}>Other Classes</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>GET HELP</p>
          <Link className={classes.homeLink}>
            <AiFillQuestionCircle />
            <p className={classes.homeText}>FAQS</p>
          </Link>
          <Link className={classes.homeLink}>
            <MdAnnouncement />
            <p className={classes.homeText}>Anouncements</p>
          </Link>
          <Link className={classes.homeLink}>
            <MdReportProblem />
            <p className={classes.homeText}>Report Misconduct</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>SCHOOL ADMIN</p>
          <Link className={classes.homeLink}>
            <FaUserPlus />
            <p className={classes.homeText}>Add Teacher</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUserPlus />
            <p className={classes.homeText}>Add Student</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Teachers</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Manage Students</p>
          </Link>
          <Link className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Exam Timetable</p>
          </Link>
          <Link className={classes.homeLink}>
            <TfiAnnouncement />
            <p className={classes.homeText}>Make An Announcement</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>TEACHER</p>
          <Link className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Schedule Monthly Test</p>
          </Link>
          <Link className={classes.homeLink}>
            <BsBuildingFillAdd />
            <p className={classes.homeText}>Enter Marks</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcDataConfiguration />
            <p className={classes.homeText}>Manage Tests</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcDataConfiguration />
            <p className={classes.homeText}>Manage Term Exams</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>SYSTEM ADMIN</p>
          <Link className={classes.homeLink}>
            <FcInvite />
            <p className={classes.homeText}>Add School</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Schools</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Users</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>YOUR ACOUNT</p>
          <Link className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Account Details</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Account Settings</p>
          </Link>
          <Link className={classes.homeLink}>
            <BiSolidLogOut />
            <p className={classes.homeText}>Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
