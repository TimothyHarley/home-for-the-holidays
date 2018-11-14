import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import createNavbar from './components/navbar';
import apiKeys from '../db/apiKeys.json';
import loginButton from './Auth/auth';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
};

initApp();
