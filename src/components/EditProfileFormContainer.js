import React, { useState } from "react";
import ButtonPrimaryHoverNo from "./ButtonPrimaryHoverNo";
import "./EditProfileFormContainer.css";

const EditProfileFormContainer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="edit-your-profile-parent">
      <div className="edit-your-profile">Edit Your Profile</div>
      <div className="frame-parent47">
        <div className="first-name-parent">
          <div className="first-name">First Name</div>
          <input
          placeholder="Md"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="placebox-info-input"
          />
        </div>
        <div className="first-name-parent">
          <div className="first-name">Last Name</div>
          <input
          placeholder="Rimel"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="placebox-info-input"
          />
        </div>
      </div>
      <div className="frame-parent48">
        <div className="first-name-parent">
          <div className="first-name">Email</div>
          <input
          placeholder="rimel1111@gmail.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placebox-info-input"
          />
        </div>
        <div className="first-name-parent">
          <div className="first-name">Address</div>
          <input
          placeholder="Kingston, 5236, United States"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="placebox-info-input"
          />
        </div>
      </div>
      <div className="frame-parent49">
        <div className="first-name-parent">
          <div className="first-name">Password Changes</div>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="placebox-info-input"
            placeholder="Current Password"
          />
        </div>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="placebox-info-input"
          placeholder="New Password"
        />
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="placebox-info-input"
          placeholder="Confirm New Password"
        />
      </div>
      <div className="cancel-parent">
        <div className="first-name">Cancel</div>
        <ButtonPrimaryHoverNo
          viewAllProducts="Save Changes"
          buttonPrimaryHoverNoPosition="unset"
          buttonPrimaryHoverNoTop="unset"
          buttonPrimaryHoverNoLeft="unset"
          buttonPrimaryHoverNoBackgroundColor="#db4444"
          buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        />
      </div>
    </div>
  );
};

export default EditProfileFormContainer;
