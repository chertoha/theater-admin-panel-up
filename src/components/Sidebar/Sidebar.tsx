import MuiDrawer from "@mui/material/Drawer";
import SidebarNav from "./SidebarNav";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FC } from "react";
import { ReactComponent as LogoIcon } from "assets/images/icons/logo.svg";
import { styled } from "@mui/material";
import { drawerWidth } from "config/constants";
import Divider from "@mui/material/Divider";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(28),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(36),
      },
    }),
  },
}));

interface ISidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [4],
          pl: [10],
        }}
      >
        <LogoIcon width="100" />

        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <SidebarNav />
    </Drawer>
  );
};

export default Sidebar;
