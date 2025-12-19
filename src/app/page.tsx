"use client"

import { defUsers } from "@/constants/constants"
import Link from "next/link"
import { useState } from "react"

interface IUSER {
  id: string
  username: string
  email: string
  address: string
  facebook: string
  image: string
}

const Page = () => {
  const [users] = useState<IUSER[]>(defUsers)

  return (
    <div className="flex flex-col gap-4 p-4">
      {users.map((user) => (
        <Link
          key={user.id}
          href={`/profile/${user.id}`}
          className="border p-4 rounded-sm"
        >
          <div>{user.id}</div>
          <div>{user.username}</div>
        </Link>
      ))}
    </div>
  )
}

export default Page
