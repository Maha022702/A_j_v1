import React, { useState } from "react";

const AddNewCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [errors, setErrors] = useState({}); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleCourseDescriptionChange = (event) => {
    setCourseDescription(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!courseName) newErrors.courseName = "Course Name is required";
    if (!courseDescription) newErrors.courseDescription = "Course Description is required";
    if (!videoFile) newErrors.videoFile = "Please upload a video file";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
    // Add your submit logic here, e.g., uploading the video file
    console.log("Course Name:", courseName);
    console.log("Course Description:", courseDescription);
    console.log("Video file:", videoFile);
    }
  };
  // flex items-center justify-center  min-h-screen bg-gray-100 p-4 shadow-lg
  return (
    <div className="container mx-auto px-4 py-4 lg:max-w-screen-lg shadow-lg rounded-2xl bg-gray-300 mt-14 mb-14">
      <form className="w-full max-w-screen-2xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Course</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Responsive grid layout */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="textField"
            >
              Course Name
            </label>
            <input
              type="text"
              id="textField"
              value={courseName} // Bind the input value to courseName state
              onChange={handleCourseNameChange} // Update course name on change
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Course name type here..."
            />
             {errors.courseName && <p className="text-red-500 text-xs mt-1">{errors.courseName}</p>}
        
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="descriptionField"
            >
              Course Description
            </label>
            <input
              type="text"
              id="descriptionField"
              value={courseDescription} // Bind the input value to courseDescription state
              onChange={handleCourseDescriptionChange} // Update course description on change
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Course description type here..."
            />
             {errors.courseDescription  && <p className="text-red-500 text-xs mt-1">{errors.courseDescription }</p>}
        
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Video
          </label>
          <div
            className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {videoFile ? (
              <p className="text-gray-600 text-sm truncate w-full text-center">
                {/* {videoFile?.name?.length > 20
                  ? `${videoFile.name.slice(0, 20)}...`
                  : videoFile.name} */}
                  {videoFile.name}
              </p>
            ) : (
              <p className="text-gray-600 text-sm">
                Drag and drop a video file here or
              </p>
            )}
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 mt-2"
            >
              Select from Folder
            </label>
          </div>
          {errors.videoFile && <p className="text-red-500 text-xs mt-1">{errors.videoFile}</p>}
       
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCourse;
