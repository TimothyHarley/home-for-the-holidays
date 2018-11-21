import 'bootstrap';
import './index.scss';
import $ from 'jquery';
import firebase from 'firebase/app';
import createNavbar from './components/navbar';
import apiKeys from '../db/apiKeys.json';
import loginButton from './Auth/auth';
import authHelpers from './helpers/authHelpers';
import friendsPage from './components/FriendsPage/friendsPage';
import showAddForm from './components/AddEditFriends/addEditFriends';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(friendsPage);
  loginButton();
  $('#show-friend-form').on('click', showAddForm);
};

initApp();
