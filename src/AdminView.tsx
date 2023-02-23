import React, { Component, useEffect, useState } from "react"
import { UserService } from "./services/UserService"
export default function AdminView() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      async function fetchMyAPI() {
        const users = await UserService.getAll();
        setUsers(users);
      }
      fetchMyAPI();
    }, []);
    return (
      <div>{users}</div>
    )
}
