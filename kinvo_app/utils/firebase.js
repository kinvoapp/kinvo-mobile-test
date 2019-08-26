import firebase from 'firebase';

const prodConfig = {
  apiKey: 'AIzaSyCB-5hP6uMd3EfOs96k8XwlbSPS-_11-Cc',
  authDomain: 'kinvo-app.firebaseapp.com',
  databaseURL: 'https://kinvo-app.firebaseio.com',
  projectId: 'kinvo-app',
  storageBucket: '',
  messagingSenderId: '409695775866',
  appId: '1:409695775866:web:4133fcdae5794626',

};

const devConfig = {
  apiKey: 'AIzaSyCB-5hP6uMd3EfOs96k8XwlbSPS-_11-Cc',
  authDomain: 'kinvo-app.firebaseapp.com',
  databaseURL: 'https://kinvo-app.firebaseio.com',
  projectId: 'kinvo-app',
  storageBucket: '',
  messagingSenderId: '409695775866',
  appId: '1:409695775866:web:4133fcdae5794626',
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
