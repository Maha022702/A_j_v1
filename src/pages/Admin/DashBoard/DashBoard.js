const DashBoard = () => {
  const list = [
    { id: 1, name: "No of users", count: 15 },
    { id: 2, name: "No of Courses", count: 6 },
    { id: 3, name: "No of FAQ", count: 10 },
    { id: 4, name: "No of users", count: 15 },
    { id: 5, name: "Contact Request", count: 3 },
    { id: 5, name: "Total Amt", count: 1500 },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-10 opacity-0 animate-flyIn transform transition duration-700 hover:scale-110 hover:text-red-800">
        Welcome to Admin Dash Board
      </h1>
      <div className="flex flex-wrap justify-center">
        {list?.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-gray-300 shadow-2xl w-80 m-5 h-40 items-center justify-center rounded-lg text-white 
              transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <p className="font-bold text-2xl text-red-700">{item?.name}</p>
              <p className="font-bold text-green-900 text-xl">{item?.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashBoard;
