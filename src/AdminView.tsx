import React, { Component, useEffect, useState } from "react"
import { UserService } from "./services/UserService"
import IUserData from "./types/Interfaces"

export default function AdminView() {
  const [users, setUsers] = useState<IUserData[]>()
  useEffect(() => {
    async function fetchMyAPI() {
      const users = await UserService.getAll()
      setUsers(users)
    }
    fetchMyAPI()
  }, [])
  return <div>{users && users[0].email}</div>
}
