import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import createNavbar from './components/navbar';
import apiKeys from '../db/apiKeys.json';
import loginButton from './Auth/auth';
import checkLoginStatus from './helpers/authHelpers';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  checkLoginStatus();
  loginButton();
};

initApp();
