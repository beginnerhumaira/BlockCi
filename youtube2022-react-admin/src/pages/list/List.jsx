import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect } from "react"
import { getProjects } from "../../helper/firestore"
import { auth } from "../../firebase"
const List = () => {
  useEffect(() => {
    console.log(auth.currentUser)
    getProjects(auth.currentUser.email)
  }, [])
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List
