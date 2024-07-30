// src/components/UserForm.js
import React, { useState } from "react";
import axios from "axios";
import "./account_creation_page.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNo: "",
    preferredMethodOfCommunication: "Phone",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", formData);
      alert("User saved successfully!");
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNo">Mobile No</label>
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No"
          value={formData.mobileNo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="preferredMethodOfCommunication">
          Preferred Method of Communication
        </label>
        <select
          name="preferredMethodOfCommunication"
          value={formData.preferredMethodOfCommunication}
          onChange={handleChange}
        >
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
        </select>
      </div>
      <div className="button-group">
        <button type="button" className="cancel">
          Cancel
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default UserForm;
