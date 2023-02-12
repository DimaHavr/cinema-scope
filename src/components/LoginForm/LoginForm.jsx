import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'utils/firebase.config';

import {
  FormContainer,
  FormInput,
  FormButton,
  ShowPasswordContainer,
  ShowPasswordButton,
  EyeIcon,
  EyeOffIcon,
  EmailIcon,
  PassIcon,
  InputContainer,
} from './LoginForm.styled';
import Loader from 'components/Loader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setPreLoader(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Notify.success(`Welcome, ${user.displayName}`);
      setPreLoader(false);
      navigate('/');
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
      Notify.failure('Something went wrong...');
      setPreLoader(false);
    }
  };

  return (
    <>
      {preLoader ? (
        <Loader />
      ) : (
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <EmailIcon />
              <FormInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </InputContainer>
            <ShowPasswordContainer>
              <PassIcon />
              <InputContainer>
                <FormInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  required
                />
              </InputContainer>
              <ShowPasswordButton
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </ShowPasswordButton>
            </ShowPasswordContainer>
            <FormButton type="submit">Login</FormButton>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default LoginForm;
