import firebase from 'firebase';

const config = {
      apiKey: 'AIzaSyDFX4XEl7enwZfMtDdN6GzOjwKBhRLS2OM',
	authDomain: 'maji-pro.firebaseapp.com',
	databaseURL: 'https://senorita-73559.firebaseio.com',
	projectId: 'senorita-73559',
	storageBucket: 'senorita-73559.appspot.com',
	messagingSenderId: '752658583515'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
