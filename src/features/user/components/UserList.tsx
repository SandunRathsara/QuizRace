"use client"
import { FC, useEffect } from "react"
import supabase from "@/utils/supabase"
import { User } from "@prisma/client"
import "./styles.css"

export default function UserList(props: { users: User[] }) {
  // useEffect(() => {
  // const channel = supabase
  //   .channel("realtime users")
  //   .on("postgres_changes", { event: "INSERT", schema: "public", table: "User" }, payload => {
  //     console.log({ payload })
  //   })
  //   .subscribe()
  //
  // return () => {
  //   supabase.removeChannel(channel)
  // }
  // }, [])

  return (
    <>
      <h2>User List</h2>
      <table id={"users"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
