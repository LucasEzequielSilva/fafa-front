import { Outlet } from "react-router-dom"
import Navbar from "./src/components/Navbar"
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <div className="w-full min-h-screen">
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default App
