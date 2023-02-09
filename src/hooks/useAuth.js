import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from 'utils/firebase.config';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getLoggedIn = () => {
      onAuthStateChanged(auth, user => {
        if (user) {
          setUserName(user.displayName);
          setIsLoggedIn(user);
        } else {
          setIsLoggedIn(null);
          setUserName('');
        }
      });
    };
    getLoggedIn();
  }, []);

  return { isLoggedIn, userName };
};

export default useAuth;
