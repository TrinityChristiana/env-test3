// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';

import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
