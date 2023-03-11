import RegisterForm from 'components/RegisterForm';
import Box from 'components/Box';
import Copyright from 'components/Copyright/Copyright';

const Register = () => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <RegisterForm />
      <Copyright />
    </Box>
  );
};

export default Register;
