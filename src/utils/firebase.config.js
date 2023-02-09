// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBqecHqi9fUhqSTIshGBKqoYagWAp6RKiA',
  authDomain: 'cinemascope-f1c1f.firebaseapp.com',
  databaseURL: 'https://cinemascope-f1c1f-default-rtdb.firebaseio.com',
  projectId: 'cinemascope-f1c1f',
  storageBucket: 'cinemascope-f1c1f.appspot.com',
  messagingSenderId: '759311783030',
  appId: '1:759311783030:web:074c72f8b8c852b9633b57',
  measurementId: 'G-W0FPBMG4BV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);
