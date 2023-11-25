import { User } from "@prisma/client"
import UserList from "@/features/user/components/UserList"
import supabase from "@/utils/supabase"
import { Button } from "antd"

export default async function Quiz() {
  // const prisma = new PrismaClient()
  // const data = await prisma.user.findMany()

  let { data, error } = await supabase.from("User").select("id, email, firstName, lastName").returns<User[]>()
  const channel = supabase
    .channel("Real Users")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "User",
      },
      payload => {
        console.log({ payload })
      },
    )
    .subscribe()

  return (
    <>
      <h1>Quiz</h1>
      <UserList users={data || []} />
    </>
  )
}
