import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import createNavbar from './components/navbar';
import apiKeys from '../db/apiKeys.json';
import loginButton from './Auth/auth';
import authHelpers from './helpers/authHelpers';
import friendsPage from './components/FriendsPage/friendsPage';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(friendsPage);
  loginButton();
};

initApp();
