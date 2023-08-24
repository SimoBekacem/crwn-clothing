import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDqX8ym4_UFn9V8IcIxx_aOskrJpeTQSlg",
    authDomain: "crwn-db-6e1bf.firebaseapp.com",
    projectId: "crwn-db-6e1bf",
    storageBucket: "crwn-db-6e1bf.appspot.com",
    messagingSenderId: "65860671102",
    appId: "1:65860671102:web:b4c67f8fedc44c2557ea2f",
    measurementId: "G-LZ7X0H0098"
};
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase ;

