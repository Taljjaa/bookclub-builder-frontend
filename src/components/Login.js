import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { api } from '../services/api';
import { SIGN_IN as signIn } from '../actions/auth';
import { useDispatch } from 'react-redux';

const Login = (props) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();

   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      api.auth.login({ username, password }).then((response) => {
         if (response.error) {
            console.log(response.error);
         } else {
            dispatch(signIn(response));
            localStorage.setItem('token', response.jwt);
            props.history.push('/');
         }
      });
   };

   return (
      <div>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
         >
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
               <Grid item xs={12}>
                  <TextField
                     required
                     id="username"
                     label="Username"
                     value={username}
                     onChange={handleUsernameChange}
                     variant="filled"
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     required
                     id="password"
                     label="Password"
                     type="password"
                     value={password}
                     onChange={handlePasswordChange}
                     variant="filled"
                  />
               </Grid>
               <Grid container justify="center" alignItems="center" spacing={2}>
                  <Grid item xs={7} style={{ marginTop: 5 }}>
                     <Button variant="outlined" type="submit">
                        Submit
                     </Button>
                  </Grid>
                  <Grid item xs={5}>
                     <Typography>
                        <Button
                           variant="contained"
                           color="primary"
                           onClick={() => props.history.push('/signup')}
                        >
                           Sign Up
                        </Button>
                     </Typography>
                  </Grid>
               </Grid>
            </form>
         </Grid>
      </div>
   );
};

export default Login;
