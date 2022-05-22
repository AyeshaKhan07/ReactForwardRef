import React, { useState, useRef } from 'react';
import { Button, Card, Chip, Divider, Grid, Stack, Switch, Typography } from '@mui/material';
import { Counter } from './components';

function App() {
  let [counter, setCounter] = useState(0)
  const [incrementByState, setIncrementByState] = useState(false);

  const counterRef = useRef();

  const incrementCounter = () => {
    incrementByState ?
      setCounter((counter += 1)) :
      counterRef.current.value++
  }

  const changeSwitch = e => {
    setCounter(0)
    setIncrementByState(e.target.checked)
  }

  return (<Grid container justifyContent="center" spacing={2} style={{padding: '50px'}}>
    <Grid item xs={12}>
      <Typography align='center' variant="h5">FORWARD REF IN REACT</Typography>
    </Grid>
    <Grid item xs={6}>
      <Card style={{padding: '50px'}}>
        <Typography align='center' variant="h5">COUNTER</Typography>
        <Typography align='center' variant="body2" color="text.secondary">
          Change the switch to increment by react state
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1 }}
        >
          <Counter value={counter} ref={counterRef} />
          <Button variant='outlined' onClick={incrementCounter}>
            +
          </Button>
        </Stack>

        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1 }}
        >
          <Chip label={`Increment By ${incrementByState ? "React State" : "Forward Ref"}`} />
          <Switch onClick={changeSwitch} color="error" />
        </Stack>
      </Card>
    </Grid>
  </Grid>
  );
}

export default App;
