import Box from 'components/Box';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from 'utils/firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import {
  FormContainer,
  FormInput,
  FormButton,
  ShowPasswordContainer,
  ShowPasswordButton,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  EmailIcon,
  PassIcon,
  PassItemIcon,
  InputContainer,
} from './RegisterForm.styled';
import Loader from 'components/Loader';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setPreLoader(true);
    if (confirmPassword !== password) {
      toast.error('Passwords are different, check them and try again...');
      setPreLoader(false);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
      });
      setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: name,
        email,
      });
      setPreLoader(false);
      navigate('/');
      window.location.reload(true);
      toast.success(`Welcome, ${name}`);
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong...');
      setPreLoader(false);
    }
  };

  return (
    <FormContainer>
      {preLoader ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column">
            <InputContainer>
              <UserIcon />
              <FormInput
                type="text"
                placeholder="Name"
                value={name}
                onChange={event => setName(event.target.value)}
                required
                maxLength="15"
              />
            </InputContainer>
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
          </Box>
          <ShowPasswordContainer>
            <InputContainer>
              <PassItemIcon />
              <FormInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
                minLength="8"
              />
            </InputContainer>
            <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </ShowPasswordButton>
          </ShowPasswordContainer>
          <ShowPasswordContainer>
            <PassIcon />
            <FormInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
              required
            />
            <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </ShowPasswordButton>
          </ShowPasswordContainer>
          <FormButton type="submit">Register</FormButton>
        </form>
      )}
    </FormContainer>
  );
};

export default RegisterForm;
