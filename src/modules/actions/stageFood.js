export default function({ state, firebase, props }) {
  const userId = firebase.auth().currentUser.uid

  firebase
    .database()
    .ref(`stages/${userId}`)
    .push(props.intake)
}
