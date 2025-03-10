import { useNavigate } from "react-router-dom";

const BuyCourse = () => {
  const navigate = useNavigate();

  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Course Name</h1>

      <div class="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div>
          <p class="text-gray-700 text-lg mb-2">Course Details:</p>
          <p class="text-gray-600">
            This course covers various topics, including...
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 text-center">
          <div>
            <p class="text-gray-700 font-semibold text-lg">Rate:</p>
            <p class="text-green-500 text-xl font-bold">$99.99</p>
          </div>
          <div>
            <p class="text-gray-700 font-semibold text-lg">Video Duration:</p>
            <p class="text-gray-600">10 hours</p>
          </div>
        </div>

        <div>
          <p class="text-gray-700 font-semibold text-lg">Subscription:</p>
          <select class="w-full mt-2 border rounded-lg px-3 py-2">
            <option>Monthly - $9.99</option>
            <option>Yearly - $99.99</option>
          </select>
        </div>

        <div class="text-center">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCourse;
