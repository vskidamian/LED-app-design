import React from "react";
import {
  Grid,
  Paper,
  List,
  Typography,
  Avatar,
  Slider
} from "@material-ui/core";
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction
} from "@material-ui/core";
import CustomizeIcon from "@material-ui/icons/Build";
import PlayIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import { withStyles ,makeStyles } from "@material-ui/core/styles";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflowY: "auto"
  }
};
const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginLeft: 20,
    width: 500
  }
});

const PrettoSliderGreen = withStyles({
  root: {
    color: '#0fb80f',
    height: 8,
    width: 500
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#f#0fb80f',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const PrettoSliderRed = withStyles({
  root: {
    color: '#FF0000',
    height: 8,
    width: 500
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#FF0000',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const PrettoSliderBlue = withStyles({
  root: {
    color: '#1E90FF',
    height: 8,
    width: 500
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#1E90FF',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


function valuetext(value) {
  return `${value}°C`;
}

export default function SettingsMenu() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid item xs={12}>
        <Paper style={styles.Paper}>
          <Typography variant="h6" color="primary">
            Presets
            <IconButton edge="end">
              <AddIcon />
            </IconButton>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Video games room" />
              <ListItemSecondaryAction>
                <IconButton>
                  <CustomizeIcon />
                </IconButton>
                <IconButton edge="end">
                  <PlayIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={styles.Paper}>
          <Typography variant="h6" color="primary">
            Global Settings
          </Typography>
          <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Temperature
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-small-steps" gutterBottom>
              Brightness
            </Typography>
            <Slider
              defaultValue={0.5}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              valueLabelDisplay="auto"
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-custom" gutterBottom>
              Saturation
            </Typography>
            <Slider
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              valueLabelDisplay="auto"
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-always" gutterBottom>
              Energy
            </Typography>
            <Slider
              defaultValue={80}
              getAriaValueText={valuetext}
              aria-labelledby="custom thumb label"
              valueLabelDisplay="auto"
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={styles.Paper}>
          <Typography variant="h6" color="primary">
            Colors
          </Typography>
          <div className={classes.margin} />
          <Typography gutterBottom>GREEN</Typography>
          <PrettoSliderGreen valueLabelDisplay="on" max={255} aria-label="pretto slider" defaultValue={150} />
          <div className={classes.margin} />
          <Typography gutterBottom>RED</Typography>
          <PrettoSliderRed valueLabelDisplay="on" max={255} aria-label="pretto slider" defaultValue={30} />
          <div className={classes.margin} />
          <Typography gutterBottom>BLUE</Typography>
          <PrettoSliderBlue valueLabelDisplay="on" max={255} aria-label="pretto slider" defaultValue={60} />
        </Paper>
      </Grid>
    </Grid>
  );
}
