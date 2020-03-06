import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  Switch,
  Typography,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { devices } from "../../store.js";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 700,
    overflowY: "auto"
  }
};

export default function LightsMenu({ devices }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Paper style={styles.Paper}>
          {devices.map(({ lights }) => (
            <Fragment>
              <List component="ul">
                <ListItem>
                  <ListItemText id="switch" primary={lights} />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      inputProps={{ "aria-labelledby": "switch" }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography variant="h3">Welcome!</Typography>
          <Typography variant="h6" style={{ marginTop: 50 }}>
            Select your device or ADD a new one...
          </Typography>
          <Card>
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
}
