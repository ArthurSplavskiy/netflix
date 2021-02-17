import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCdWVAS-SwD6BNZqW1xL2gtn_PRoydl-do",
  authDomain: "netflix-b2013.firebaseapp.com",
  databaseURL: "https://netflix-b2013.firebaseio.com",
  projectId: "netflix-b2013",
  storageBucket: "netflix-b2013.appspot.com",
  messagingSenderId: "801235083502",
  appId: "1:801235083502:web:263e9b3ad584c371a113ff"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
