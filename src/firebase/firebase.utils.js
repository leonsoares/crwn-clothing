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

        // making a new collection reference
    // const collectionRef = firestore.collection('users');
    // const collectionSnapshot = await collectionRef.get();
    // console.log({collection: collectionSnapshot.docs.map(doc => doc.data()) });

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
            console.log(`error creating user: ${error.message}`)
        }
    }
    return userRef
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


// reuse this function to create batch of collections into our firestore database
export const addCollectionAndDocuments = async (
    collectionKey, 
    objectToAdd
    ) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef)

    const batch = firestore.batch();
    objectToAdd.forEach( obj => {
        // creating a new doc ref for each obj on firestore with a uniq id
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    // firing our batch call
    // .commit returns a promise
    return await batch.commit()
};

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


