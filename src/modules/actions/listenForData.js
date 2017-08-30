export default function listenForData({ firebase, controller }) {
  const dbRef = firebase
    .database()
    .ref()
    .child('text')

  dbRef.on('value', snap =>
    controller.getSignal('app.setNumber')({ num: snap.val() })
  )
}
