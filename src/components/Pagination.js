import React from "react";

const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const visiblePages = 5; // Number of page buttons to show
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPage, startPage + visiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded ${
          currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-white text-blue-500"
        } hover:bg-blue-500 hover:text-white`}
      >
        &larr; Prev
      </button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 border rounded bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Page Buttons */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          } hover:bg-blue-500 hover:text-white`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPage && (
        <>
          {endPage < totalPage - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPage)}
            className="px-4 py-2 border rounded bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {totalPage}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className={`px-4 py-2 border rounded ${
          currentPage === totalPage
            ? "bg-gray-200 text-gray-400"
            : "bg-white text-blue-500"
        } hover:bg-blue-500 hover:text-white`}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
