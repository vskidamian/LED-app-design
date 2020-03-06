import React from "react";
import { Link, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Paper, Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import LightsIcon from "@material-ui/icons/Highlight";
import AnimationsIcon from "@material-ui/icons/Extension";
import SettingsIcon from "@material-ui/icons/SettingsApplications";
import { menus } from "../../store";
import SettingsMenu from "./SettingsMenu.js";
import AnimationsMenu from "./AnimationsMenu.js";
import LightsMenu from "./LightsMenu.js";
import { devices } from "../../store";

export default ({ onSelect, category }) => {
  const index = category ? menus.findIndex(group => group === category) : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "LIGHTS" : menus[index]);
  };

  return (
    <BrowserRouter>
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          variant="fullWidth"
          orientation="horizontal"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab
            icon={<LightsIcon />}
            label="LIGHTS"
            component={Link}
            to="/lights"
          />
          <Tab
            icon={<AnimationsIcon />}
            label="ANIMATIONS"
            component={Link}
            to="/animations"
          />
          <Tab
            icon={<SettingsIcon />}
            label="SETTINGS"
            component={Link}
            to="/settings"
          />
        </Tabs>
      </Paper>
      {/*
        <Switch>
          
          <Route path="/lights" component={LightsMenu} />
          <Route path="/animations" component={AnimationsMenu} />
          <Route path="/settings" component={SettingsMenu} />
        </Switch>
          */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/lights" />} />
        <Route
          path="/lights"
          component={() => <LightsMenu devices={devices} />}
        />
        <Route path="/animations" component={AnimationsMenu} />
        <Route path="/settings" component={SettingsMenu} />
      </Switch>
    </BrowserRouter>
  );
};
