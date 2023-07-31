import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import { useAuth } from "util/auth";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
  link: {
    color: "#ffffff", // White color for the links
    fontSize: "18px", // Large font size
    fontWeight: "bold", // Bold text
    margin: "0 15px", // Properly spaced out links
    textDecoration: "none", // Remove underline
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const auth = useAuth();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <a>
                <img src={logo} alt="Logo" className={classes.logo} />
              </a>
            </Link>
            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              {/* Drawer Icon and Navigation Links */}
            </Hidden>
            <Hidden smDown={true} implementation="css">
              {/* Desktop Navigation Links */}
              <Link href="/" passHref={true}>
                <a className={classes.link}>Home</a>
              </Link>
              <Link href="/contact" passHref={true}>
                <a className={classes.link}>Contact Us</a>
              </Link>
              {/* Rest of the code for auth, dark mode, etc. */}
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Section>
  );
}

export default Navbar;
