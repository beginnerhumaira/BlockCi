import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import MilestoneForm from "../../components/milestone/milestoneform"
import MilestoneList from "../../components/milestone/milestonelist"
import React, { useState, useMemo, useEffect } from "react"
import { appendProject, dummytest } from "../../helper/firestore"
import { auth } from "../../firebase"
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("")
  // const MemoizedMilestoneForm = React.memo(MilestoneForm);
  const [main, setMain] = useState("")
  const [description, setDescription] = useState("")
  const [completed, setCompleted] = useState(false)
  const [milestones, setMilestones] = useState([
    { main: main, description: description, completed: completed },
  ])

  const [formData, setFormData] = useState({
    projectname: "",
    projectdesc: "",
    targetamount: "",
    pledgeamount: "",
    currentamount: "",
    startdate: "",
    enddate: "",
    milestone1: "",
    milestone2: "",
    milestone3: "",
    otherdetails: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Pass form data and email of logged-in user to appendProject function
    appendProject(auth.currentUser.email, formData)

    // Reset form data after submission if needed
    // setFormData({})
  }

  const handleInputChange = (e) => {
    // console.log(e.target)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div>
                {/* <h2>Project Milestones</h2>
                <MilestoneForm /> */}
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.key}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.key} // Use input.key instead of input.label
                    value={formData[input.key] || ""} // Use input.key instead of input.label
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
