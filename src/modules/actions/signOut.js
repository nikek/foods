export default function({ firebase }) {
  firebase
    .auth()
    .signOut()
    .then(
      function() {
        console.log('Signed out')
      },
      function(error) {
        console.log('error signing out')
      }
    )
}
