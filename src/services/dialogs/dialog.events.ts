export enum DialogClientEvent {
  SERVER_SENDS_MESSAGE = 'SERVER_SENDS_MESSAGE',
  SERVER_SENDS_TWEET = 'SERVER_SENDS_TWEET',
  SERVER_SENDS_DIALOGS = 'SERVER_SENDS_DIALOGS',
  SERVER_SENDS_DIALOG_MESSAGES = 'SERVER_SENDS_DIALOG_MESSAGES',
  SERVER_RETURNS_MESSAGE = 'SERVER_RETURNS_MESSAGE',
  SERVER_SENDS_DIALOG = 'SERVER_SENDS_DIALOG',
  SERVER_SENDS_DELETED_MESSAGES = 'SERVER_SENDS_DELETED_MESSAGES',
}

export enum DialogServerEvent {
  CLIENT_SEND_MESSAGE = 'CLIENT_SEND_MESSAGE',
  CLIENT_SEND_TWEET = 'CLIENT_SEND_TWEET',
  CLIENT_GET_DIALOG_MESSAGES = 'CLIENT_GET_DIALOG_MESSAGES',
  CLIENT_GET_DIALOGS = 'CLIENT_GET_DIALOGS',
  CLIENT_GET_DIALOG = 'CLIENT_GET_DIALOG',
  CLIENT_DELETE_MESSAGES = 'CLIENT_DELETE_MESSAGES',
}
