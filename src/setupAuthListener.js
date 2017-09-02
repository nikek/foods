export default function setupAuthListener(firebase, setUser) {
  firebase.auth().onAuthStateChanged(userIn => {
    setUser({
      user: userIn
        ? {
            name: userIn.displayName,
            email: userIn.email,
            photoUrl: userIn.photoURL,
            uid: userIn.uid
          }
        : null
    })
  })
}
