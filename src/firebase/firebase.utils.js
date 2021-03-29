import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAJXhQHKgtnvomFhTts4FHR3hPf19HDJyQ",
    authDomain: "crwn-db-7e83b.firebaseapp.com",
    projectId: "crwn-db-7e83b",
    storageBucket: "crwn-db-7e83b.appspot.com",
    messagingSenderId: "240454147371",
    appId: "1:240454147371:web:d07dd7bb345a07c016796e",
    measurementId: "G-V7Y0W4QBMZ"    
}


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
        })
        } catch (error){
            console.log(`error creating user: ${error}`)
        }
    }
}


//  CONFIGING FIREBASE
firebase.initializeApp(config)


// export this out to use it anywhere whe need auth in our app
export const auth = firebase.auth()

// // export this out to use it anywhere whe need firestore in our app
export const firestore = firebase.firestore()

// setting up the google auth utility
// getting access to google Provider class from google
const provider = new firebase.auth.GoogleAuthProvider();

// trigger the google pop up whenever we use google auth provider for authentication and sign-in
provider.setCustomParameters({ prompt: 'select_account'});

// FIREBASE have lots of popups optinos ex: twitter, google, github and others
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// in case we need the whole fire base library 
export default firebase


