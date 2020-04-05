import firebase from "./firebaseInit";

const FirebaseMethods = {
  signIn: (
    email: string,
    password: string,
    callback: (result: any) => void
  ) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
      .then(result => callback(result))
      .catch(error => callback(error))
  }
}

export default FirebaseMethods;