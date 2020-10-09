import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '40vh',
  },
  card: {
    padding: '3rem',
    borderRadius: '2rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.root}>
      <CssBaseline />
      <Card raised variant='outlined' className={classes.card}>
        <CardHeader title='Go to authentication' />
      </Card>
    </Container>
  );
};

export default Home;
