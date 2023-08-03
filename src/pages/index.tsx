import Login from "@/components/Login"
import { useAuth } from "../../context/AuthContext"

export default function Home() {
  const {currentUser} = useAuth()

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <div>dashboard</div>}
    </>
  )
}
