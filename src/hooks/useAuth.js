import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from 'utils/firebase.config';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({});
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const getLoggedIn = () => {
      onAuthStateChanged(auth, user => {
        if (user) {
          setUserName(user.displayName);
          setIsLoggedIn(user);
          setUserId(user.uid);
        } else {
          setIsLoggedIn(null);
          setUserName('');
          setUserId();
        }
      });
    };
    getLoggedIn();
  }, []);

  return { isLoggedIn, userName, userId };
};

export default useAuth;
