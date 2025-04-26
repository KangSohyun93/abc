import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Topbar from "~/scenes/global/Topbar/Topbar";
import { Box } from "@mui/material";
import SideBar from "~/scenes/global/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <Box className={cx("wrapper")}>
      <Box display="flex">
        <Box>
          <SideBar />
        </Box>
        <ToastContainer />
        <Box flex="1">
          <Topbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
