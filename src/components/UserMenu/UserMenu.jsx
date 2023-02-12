import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signOut } from 'firebase/auth';
import { auth } from 'utils/firebase.config';
import useAuth from '../../hooks/useAuth';
import { Button, Container, Text, LogOutIcon } from './UserMenu.styled';
import Loader from 'components/Loader';

const UserMenu = () => {
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();
  const { userName } = useAuth();

  const logOut = async () => {
    setPreLoader(true);
    try {
      await signOut(auth);
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
    <Container>
      {preLoader ? (
        <Loader />
      ) : (
        <>
          <Text to="/user">{userName}</Text>
          <Button onClick={() => logOut()}>
            <LogOutIcon />
          </Button>
        </>
      )}
    </Container>
  );
};

export default UserMenu;
