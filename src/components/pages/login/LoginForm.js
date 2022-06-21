
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { FiFacebook } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
// import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom'




const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
      rememberMe: Yup
        .boolean()
    }),
    onSubmit: (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
    }
  });

  return (
    <>

      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <a href="https://ru-ru.facebook.com/reg" target="_blank" rel="noreferrer">
                  <Button
                    color="info"
                    fullWidth
                    startIcon={<FiFacebook />}
                    size="large"
                    variant="contained"
                  >
                    Login with Facebook
                  </Button>
                </a>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                  <Button
                    fullWidth
                    color="error"
                    startIcon={<FaGoogle />}
                    size="large"
                    variant="contained"
                  >
                    Login with Google
                  </Button>
                </a>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            {/* <Checkbox /> Remember me */}
            <Box sx={{ py: 2 }}>
              <Link
                to="/profile"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign In Now
                </Button>
              </Link>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NavLink to='/register'>
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};



export default LoginForm