export default function setupAuthListener(
  firebase,
  loginComplete,
  logoutComplete
) {
  firebase.auth().onAuthStateChanged(userIn => {
    userIn
      ? loginComplete({
          user: {
            name: userIn.displayName,
            email: userIn.email,
            photoUrl: userIn.photoURL,
            uid: userIn.uid
          }
        })
      : logoutComplete()
  })
}
