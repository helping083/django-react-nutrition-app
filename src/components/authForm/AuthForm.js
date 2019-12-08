import React, { useState } from 'react';
import stylesName from './AuthForm.module.scss';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SignupForm = (props) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come frtsRestTypeom props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const switchForm =  () => {
   props.toggleUser()
   formik.setFieldValue('createUser', props.createUser);
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },
    validationSchema: Yup.object().shape({
      createUser: Yup.boolean(),
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().when('createUser',{
        is: true,
        then: Yup.string().email('Invalid email address').required('Required'),
        otherwise: Yup.string()
      })
    }),
    onSubmit: async (values) => {
      try {
        console.log(formik)
        alert(JSON.stringify(values, null, 2));
      } catch (error) {
        console.log(error); 
      } 
    },
    handleChange: (values) => {
      console.log('jjjjjjs', values);
    },
    validateOnChange: false
  });
  const classes = useStyles();
  return (
    <div className={[classes.root,stylesName.container].join(' ')}>
      <Grid 
        container 
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={6} lg={4}>
          <div className={stylesName.headerContainer}>
            <h2>Test app</h2>
          </div>
          <Paper className={classes.paper}>
            <form onSubmit={formik.handleSubmit} onChange={(e)=>{console.log(formik)}}>
              <Box className={stylesName.textFieldsContainer}>
                <TextField
                  id="username"
                  value={formik.values.username}
                  className={[classes.textField, stylesName.textFields].join(' ')}
                  label="username"
                  margin="none"
                  variant="outlined"
                  helperText={formik.touched.username && formik.errors.username ? formik.errors.username :"*type password"}
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  error={formik.touched.username && formik.errors.username ? true :false}
                />
              </Box>
              
              <Box className={stylesName.textFieldsContainer}>
                <TextField
                  className={[classes.textField, stylesName.textFields].join(' ')}
                  id="password"
                  label="password"
                  name="password"
                  variant="outlined"
                  type="text"
                  value={formik.values.password}
                  helperText={formik.touched.password && formik.errors.password ? formik.errors.password :"*type password"}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password ? true :false}
                />
              </Box>
              {props.createUser ?
                <Box className={stylesName.textFieldsContainer}>
                  <TextField
                    id="email"
                    label="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    helperText="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && formik.errors.email ? true :false}
                    className={[classes.textField, stylesName.textFields].join(' ')}
                  />
                </Box>:null
              }
              <Box className={[stylesName.buttonContainer, stylesName.textFieldsContainer].join(' ')}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  className={[classes.button, stylesName.buttons].join(' ')}
                  type='submit'
                >
                 {props.createUser ? 'create a user' :'login in'}
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  className={[classes.button, stylesName.buttons].join(' ')}
                  onClick={switchForm}
                  type='button'
                >
                  {props.createUser ? 'go to login form': 'go to create user form'}
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  }
}
export default connect (mapStateToProps,null)(SignupForm);