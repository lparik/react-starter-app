import IUserData from "../types/Interfaces"

export const UserService = {
  getAll,
}
function getAll() {
  const users: Array<IUserData> = [
    {
      email: "lasse.taukolainen@pjeh.fi",
      name: "lasse taukolainen",
      role: "Ylläpitäjä",
    },
    {
      email: "henri.puotilainen@pjeh.fi",
      name: "Henri puotilainen",
      role: "Käsittelijä",
    },
  ]
  return users
}
