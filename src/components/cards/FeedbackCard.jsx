"use client";

import React from "react";

const FeedbackCard = ({ feedback }) => {
  const { _id, message, date } = feedback;

  // format date nicely
  const formattedDate = new Date(date).toLocaleString();

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition">
      <p className="text-gray-800 text-lg mb-2">{message}</p>

      <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>

      <div className="flex gap-3">
        <button className="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Update
        </button>

        <button className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
