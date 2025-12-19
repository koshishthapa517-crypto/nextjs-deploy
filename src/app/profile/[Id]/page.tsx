import { defUsers } from "@/constants/constants"

interface PageProps {
  params: {
    id: string
  }
}

const ProfilePage = ({ params }: PageProps) => {
  const user = defUsers.find((u) => u.id === params.id)

  if (!user) {
    return <div className="p-4">User not found</div>
  }

  return (
    <div className="p-6 space-y-4">
      <img src={user.image} alt={user.username} className="w-32 h-32 rounded-full" />
      <h1 className="text-xl font-bold">{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <a href={user.facebook} className="text-blue-500" target="_blank">
        Facebook Profile
      </a>
    </div>
  )
}

export default ProfilePage
