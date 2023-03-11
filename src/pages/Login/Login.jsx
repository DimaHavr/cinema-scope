import LoginForm from 'components/LoginForm';
import Box from 'components/Box';
import Copyright from 'components/Copyright/Copyright';
const Login = () => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <LoginForm />
      <Copyright />
    </Box>
  );
};

export default Login;
