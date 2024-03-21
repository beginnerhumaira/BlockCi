import React, { useState } from 'react';
import "./profile.scss";

const Profile = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [description, setDescription] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [verified, setVerified] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log({
      organizationName,
      description,
      contactNo,
      verified,
      companyLogo
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setCompanyLogo(file);
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <div className="left">
            <h1>Organization Logo</h1>
            {companyLogo && (
              <img src={URL.createObjectURL(companyLogo)} alt="Company Logo" />
            )}
            <input type="file" onChange={handleLogoChange} accept="image/*" />
          </div>
          <div className="right">
            <form onSubmit={handleFormSubmit}>
              <div className="formInput">
                <label>
                  Organization Name:
                  <input
                    type="text"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                </label>
              </div>
              <div className="formInput">
                <label>
                  Description:
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
              </div>
              <div className="formInput">
                <label>
                  Contact No:
                  <input
                    type="text"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </label>
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
  );
};

export default Profile;
