ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', function (event, guestId, method, ...args) {
  const guestContents = webContents.fromId(guestId)
  if (guestContents == null) return

  if (canAccessWindow(event.sender, guestContents)) {
    guestContents[method](...args)
  } else {
    console.error(`Blocked ${event.sender.getURL()} from calling ${method} on its opener.`)
  }
})

ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD_SYNC', function (event, guestId, method, ...args) {
  const guestContents = webContents.fromId(guestId)
  if (guestContents == null) {
    event.returnValue = null
    return
  }

  if (canAccessWindow(event.sender, guestContents)) {
    event.returnValue = guestContents[method](...args)
  } else {
    console.error(`Blocked ${event.sender.getURL()} from calling ${method} on its opener.`)
    event.returnValue = null
  }
})