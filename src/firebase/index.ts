import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFirebase();

if (process.env.NODE_ENV !== 'production') {
  firebase.auth().useEmulator('http://localhost:9099');
}
