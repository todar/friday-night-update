import React from "react";
import Link from "./link";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SongsIcon from "@material-ui/icons/MusicNote";
import ConnectIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Tune"
import { styled, useTheme } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // color: theme.palette.secondary.main,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%"
}));

// @TODO Try to get this to work???
const NavAction = styled(BottomNavigationAction)(({ theme }) => ({
  // root: {
  //   color: theme.palette.secondary.dark,
  //   "&$selected": {
  //     color: theme.palette.secondary.main
  //   }
  // }
}));

const navbar = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  return (
    <NoSsr>
      <StyledBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          href="/"
          label="Home"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          component={Link}
          href="/songs"
          label="Songs"
          icon={<SongsIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/connect"
          label="Connect"
          icon={<ConnectIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/settings"
          label="Settings"
          icon={<SettingsIcon />}
        />
      </StyledBottomNavigation>
    </NoSsr>
  );
};

export default navbar;