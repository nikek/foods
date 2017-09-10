const dataNodes = uid => [
  {
    name: 'stage',
    path: `stages/${uid}`,
    event: 'value',
    signal: 'intake.setStage'
  }
]

export function startDataSub({ state, firebase, controller }) {
  const db = firebase.database()

  dataNodes(state.get('user.uid')).forEach(node => {
    db.ref(node.path).on(node.event, snap => {
      const props = {
        [node.name]: snap.val()
      }

      controller.getSignal(node.signal)(props)
    })
  })
}

export function stopDataSub({ state, firebase, controller }) {
  const db = firebase.database()

  dataNodes(state.get('user.uid')).forEach(node => {
    db.ref(node.path).off(node.event)
  })
}
