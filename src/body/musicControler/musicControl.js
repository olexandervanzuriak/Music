import React from "react";
import "./musicControl.css";
import daft from "./daft.jpg";
import { Icon, RedoIcon } from "evergreen-ui";
import GetLucky from "./GetLucky.mp3";

export class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "DaftPunkImg",
      cycleStyle: styles.stopCycleAnimation,
      iconName: "play",
      audioPlay: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((state) => ({
      cycleStyle: styles.cycleAnimation,
      iconName: "pause",
      audioPlay: "AutoPlay",
    }));
    if (this.state.cycleStyle == styles.cycleAnimation) {
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "play",
      }));
    }
  };

  render() {
    return (
      <div>
        <img
          src={daft}
          className={this.state.name}
          style={this.state.cycleStyle}
        ></img>
        <Icon
          icon={this.state.iconName}
          className="IconStop"
          size={80}
          onClick={this.toggle}
        />
        <div id="music">
          <audio onPlaying="play" src={GetLucky} />
        </div>
        <div>
          <p className="nameMusic">Get Lucky</p>
          <p className="musicText">
            "Get Lucky" is a song by French electronic music duo Daft Punk,
            featuring vocals by Pharrell Williams and co-written by the duo,
            Williams, and Nile Rodgers. It is the lead single from Daft Punk's
            fourth studio album, Random Access Memories.Before its release as a
            single, "Get Lucky" was featured in television advertisements
            broadcast during Saturday Night Live, after which Rodgers and
            Williams announced their involvement in the track.Small excerpts
            also appear throughout the promotional video series The
            Collaborators.
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  cycleAnimation: {},
  stopCycleAnimation: {
    animationPlayState: "paused",
  },
};
