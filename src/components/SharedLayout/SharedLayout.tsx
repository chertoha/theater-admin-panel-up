import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

const SharedLayout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header
          open={open}
          toggleDrawer={toggleDrawer}
        />

        <Sidebar
          open={open}
          toggleDrawer={toggleDrawer}
        />

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
