import React, { useEffect, useState } from "react"
import "./profile.scss"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage, auth } from "../../firebase"
import { getProjects, updateOrganization } from "../../helper/firestore"
const Profile = () => {
  const [organizationName, setOrganizationName] = useState("")
  const [description, setDescription] = useState("")
  const [contactNo, setContactNo] = useState("")
  const [verified, setVerified] = useState(false)
  const [companyLogo, setCompanyLogo] = useState(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // Here you can handle form submission logic
    console.log({
      organizationName,
      description,
      contactNo,
      verified,
      companyLogo,
    })

    const url = await uploadImage(companyLogo)
    updateOrganization(auth.currentUser.email, {
      org_name: organizationName,
      org_phone_number: contactNo,
      org_verified: verified,
      org_logo: url,
    })
      .then(() => {
        console.log("Organization details updated successfully")
      })
      .catch((error) => {
        console.error("Error updating organization details: ", error)
      })
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    setCompanyLogo(file)
  }

  const uploadImage = async (file) => {
    // Create a reference to the storage bucket
    const storageRef = ref(storage, "images/" + auth.currentUser.email)

    try {
      // Upload the file
      const uploadTask = uploadBytesResumable(storageRef, file)

      // Await completion of the upload task
      const snapshot = await uploadTask

      // Retrieve the download URL
      const downloadURL = await getDownloadURL(snapshot.ref)

      console.log("File uploaded successfully. Download URL:", downloadURL)

      // Return the download URL
      return downloadURL
    } catch (error) {
      console.error("Error uploading file:", error)
      return null
    }
  }


  useEffect(() => {
    getProjects(auth.currentUser.email).then((data) => {
        setOrganizationName(data.org_name)
        setDescription(data.org_description)
        setContactNo(data.org_phone_number)
        setVerified(data.org_verified)
        // setCompanyLogo(data.org_logo)
        }).catch((error) => {
        console.log(error)
        })
  }, [auth.currentUser])

  return (
    <div className="new">
      <div className="profile-container">
        <div className="top">
          <div className="left">
            <h3 className="my-text">Organization Logo</h3>
            {companyLogo && (
              <img
                className="logo-img"
                src={URL.createObjectURL(companyLogo)}
                alt="Company Logo"
              />
            )}
            <input type="file" onChange={handleLogoChange} accept="image/*" />
          </div>
          <div className="right">
            <form onSubmit={handleFormSubmit}>
              <div className="formInput">
                <label>Organization Name:</label>
                <input
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Contact No:</label>
                <input
                  type="text"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>
                  Verified:
                  <input
                    type="checkbox"
                    checked={verified}
                    onChange={(e) => setVerified(e.target.checked)}
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
