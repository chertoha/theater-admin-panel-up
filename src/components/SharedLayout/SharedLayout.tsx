import { Box } from "@mui/material";
import React, { FC, Suspense, useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink, Outlet } from "react-router-dom";
// import LogoIcon from "assets/images/icons/logo.svg";
import { ReactComponent as LogoIcon } from "assets/images/icons/logo.svg";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import InfoIcon from "@mui/icons-material/Info";
import { ROUTES } from "config/router";
import { drawerWidth } from "config/constants";
import Header from "components/Header";
import { blue } from "@mui/material/colors";

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: prop => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

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

// const StyledLink = styled(NavLink, {shouldForwardProp: true})({theme})=>({
//   "&.active": {
//     // color: theme.

//   }
// });

const StyledLink = styled(NavLink)(({ theme }) => ({
  // backgroundColor: "black",
  display: "block",
  textDecoration: "none",
  color: "black",

  "&.active": {
    backgroundColor: blue[500],
    color: "white",

    "& .MuiSvgIcon-root": { fill: "white" },
  },
}));

const SharedLayout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* <AppBar
          position="absolute"
          open={open}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge
                badgeContent={4}
                color="secondary"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar> */}

        <Header
          open={open}
          toggleDrawer={toggleDrawer}
        />

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
          <List component="nav">
            <StyledLink to="/publications">
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Публікації" />
              </ListItemButton>
            </StyledLink>

            <StyledLink to={ROUTES.USERS}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Користувачі" />
              </ListItemButton>
            </StyledLink>

            <StyledLink to={ROUTES.SUBSCRIBERS}>
              <ListItemButton>
                <ListItemIcon>
                  <MarkunreadIcon />
                </ListItemIcon>
                <ListItemText primary="Підписники" />
              </ListItemButton>
            </StyledLink>

            <StyledLink to={ROUTES.ABOUT}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>

                <ListItemText primary="Про нас" />
              </ListItemButton>
            </StyledLink>

            <Divider sx={{ my: 4 }} />

            {/* <ListSubheader
              component="div"
              inset
            >
              Saved reports
            </ListSubheader>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Current month" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Last quarter" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Year-end sale" />
            </ListItemButton> */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container
            maxWidth="lg"
            sx={{ mt: 16, mb: 16 }}
          >
            <Grid
              container
              spacing={12}
            >
              {/* <Grid
                item
                xs={12}
                md={8}
                lg={9}
              >
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                lg={3}
              >
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid> */}

              <Suspense fallback={<h1>Loading ...</h1>}>
                <Outlet />
              </Suspense>
            </Grid>
          </Container>
        </Box>
      </Box>
      );
    </>
  );
};

export default SharedLayout;
