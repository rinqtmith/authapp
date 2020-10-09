import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  Container,
  CssBaseline,
  Typography,
  Button,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '30vh',
  },
  card: {
    padding: '3rem',
    borderRadius: '2rem',
  },
  button: {
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Home = () => {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useState(false);

  const palleteType = darkMode ? 'dark' : 'light';

  let theme = createMuiTheme({
    palette: {
      type: palleteType,
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: darkMode ? '#303030' : '#1976d2',
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm' className={classes.root}>
        <CssBaseline />
        <Card raised variant='outlined' className={classes.card}>
          <CardHeader
            title='Go to authentication'
            component={Link}
            to='signup'
            className={classes.link}
            style={{ color: darkMode ? 'yellow' : 'blue' }}
          />
          <Typography variant='subtitle1'>
            rinqtf@gmail.com &copy;{new Date().getFullYear()}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => setDarkMode(!darkMode)}
          >
            Change theme
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
