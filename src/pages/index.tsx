import Login from "@/components/Login"
import { useAuth } from "../../context/AuthContext"
import UserDashboard from "@/components/UserDashboard";

export default function Home() {
  const {currentUser} = useAuth()

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}
