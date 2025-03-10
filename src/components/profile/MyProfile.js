import React, { useState } from "react";

const MyProfile = () => {
  const [username, setUsername] = useState("John Doe");
  const [mobile, setMobile] = useState("+1 234 567 8901");
  const [email] = useState("johndoe@example.com"); // Non-editable
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Profile Picture */}
      <div className="flex justify-center mt-4 relative">
        <img
          className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
          src={profileImage}
          alt="Profile"
        />
        <label
          htmlFor="profileImageInput"
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c.341 0 .674.034 1 .1m-2 0a4 4 0 113.9 2.9M15 3h5a2 2 0 012 2v5m-2-2a9.947 9.947 0 01-3 1.3M3 15v-3a9.943 9.943 0 011.3-3m.7 3a9.978 9.978 0 003.3 7.3M21 21l-6-6"
            />
          </svg>
        </label>
        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Editable Fields */}
      <div className="px-6 py-4">
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Email (Non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="text"
            value={email}
            disabled
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="px-6 py-4 text-center">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() =>
            alert(`Saved:\nUsername: ${username}\nMobile: ${mobile}`)
          }
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
