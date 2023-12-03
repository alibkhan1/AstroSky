import React from "react";
import Navigation from "../Navigation/Navigation";
import { useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Paper,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useStyles } from "./PageLayout.styles";

const PageLayout = ({ children, pageTitle, pageIcon, isHighContrast }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <Navigation showFab={false} />
          </div>
          {isDesktop && (
            <div className={classes.pageTitleBox}>
              <span className={classes.pageTitleIcon}>{pageIcon}</span>
              <Typography variant="h5" className={classes.pageTitleText}>
                {pageTitle}
              </Typography>
            </div>
          )}
          <div className={classes.toolbarRight}>
            <Logo
              className={
                isHighContrast ? classes.logoHighContrast : classes.logo
              }
            />
          </div>
        </Toolbar>
      </AppBar>
      {!isDesktop && (
        <Grid
          container
          justifyContent="center"
          className={classes.pageTitleMobile}
        >
          <Grid item xs={12}>
            <Paper className={classes.pageTitleBox}>
              <div className={classes.pageTitleIconText}>
                <span className={classes.pageTitleIcon}>{pageIcon}</span>
                <span className={classes.pageTitleText}>
                  <Typography variant="h5" className={classes.pageTitleText}>
                    {pageTitle}
                  </Typography>
                </span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      )}
      <div className={classes.toolbarSpacing} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default PageLayout;
