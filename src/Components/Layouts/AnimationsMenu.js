import React from "react";
import MaterialTable from 'material-table';
import { Typography, Grid, Paper } from "@material-ui/core";



const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflowY: "auto"
  },
  Typography: {
    marginBottom: 10
  }
};

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Time Start', field: 'start', type: 'numeric'  },
      { title: 'Time Stop', field: 'stop', type: 'numeric'},
      { title: 'Effect', field: 'effect', lookup: {1: 'SET', 2: 'BLINK', 3: 'SIMPLE'} },
    ],
    data: [
      { start: '0', stop: '5', effect:2 },
      {
        start: '3',
        stop: '4',
        effect: 1
      },
    ],
  });

return ( 

  <Grid>
    <Grid item xs={12}>
      <Paper style={styles.Paper}>
        <Typography style={styles.Paper} variant="h6" color="primary">
          Animations and Effects
        </Typography>
        <MaterialTable
      title="Light Sources"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
      </Paper>
    </Grid>
  </Grid>
)}
