import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;


const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const [error, setError] = React.useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    let headers = {
      'Content-Type': 'application/json'
    }
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:3003/auth/register/', {
      username: data.get("username"),
      password: data.get("password"),
      password2: data.get("password2"),
    }, {
      headers:headers
    })
    .then(function (response) {
      setError(false)
      navigate("/signin")
    })
    .catch(function (error) {
      setError(true)
      console.log(error);
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error ? <Typography component="h1" variant="h5">
            Username already exist.
          </Typography> :null}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Reenter your password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Link href="/signin" variant="body2">
                {"Have an account? Sign In"}
              </Link>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}