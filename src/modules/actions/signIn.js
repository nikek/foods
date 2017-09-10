export default function({ state, firebase, module, path }) {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/plus.login')

  // returns promise for 'then' and error handling
  firebase.auth().signInWithPopup(provider)
}
