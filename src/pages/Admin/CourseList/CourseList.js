import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();
  const data = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "sam.wilson@example.com",
      role: "Viewer",
    },
    {
      id: 4,
      name: "Anna Taylor",
      email: "anna.taylor@example.com",
      role: "Admin",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      role: "Editor",
    },
    {
      id: 6,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      role: "Viewer",
    },
    { id: 7, name: "Chris Lee", email: "chris.lee@example.com", role: "Admin" },
    {
      id: 8,
      name: "Sophia Johnson",
      email: "sophia.johnson@example.com",
      role: "Editor",
    },
    {
      id: 9,
      name: "Liam Martinez",
      email: "liam.martinez@example.com",
      role: "Viewer",
    },
    {
      id: 10,
      name: "Emily White",
      email: "emily.white@example.com",
      role: "Admin",
    },
    {
      id: 11,
      name: "David Brown",
      email: "david.brown@example.com",
      role: "Editor",
    },
    {
      id: 12,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      role: "Viewer",
    },
    {
      id: 13,
      name: "Chris Lee",
      email: "chris.lee@example.com",
      role: "Admin",
    },
    {
      id: 14,
      name: "Sophia Johnson",
      email: "sophia.johnson@example.com",
      role: "Editor",
    },
    {
      id: 15,
      name: "Liam Martinez",
      email: "liam.martinez@example.com",
      role: "Viewer",
    },
    {
      id: 16,
      name: "Emily White",
      email: "emily.white@example.com",
      role: "Admin",
    },
  ];

  return (
    <div className="container place-self-center overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Course List</h2>
      <div className="container flex justify-end place-self-center">
        <h1
          className="text-white font-bold p-3 rounded-md bg-green-500 shadow-2xl cursor-pointer hover:bg-green-900"
          onClick={() => {
            navigate("/addNewCourse");
          }}
        >
          Add New Course
        </h1>
      </div>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-400 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item.id}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.email}</td>
              <td className="py-3 px-6 text-left">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
