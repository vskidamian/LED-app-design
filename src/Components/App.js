import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { devices } from "../store.js";
export default class extends Component {
  state = {
    devices
  };

  getDevicesByLights() {
    return Object.entries(
      this.state.devices.reduce((devices, device) => {
        const { lights } = device;

        devices[lights] = devices[lights]
          ? [...devices[lights], device]
          : [device];

        return devices;
      }, {})
    );
  }

  handleCategorySelected = category =>
    this.setState({
      category
    });

  render() {
    const devices = this.getDevicesByLights(),
      { category } = this.state;
    return (
      <Fragment>
        <Header />
    

        <Footer category={category} onSelect={this.handleCategorySelected} devices={devices} />
      </Fragment>
    );
  }
}
