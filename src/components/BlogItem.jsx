// src/components/BlogPost.js
import React from 'react';

const BlogItem = () => {
  return (
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <div className="flex mb-4">
        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold">
          15<br />Jan
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">Google inks pact for new 35-storey office</h3>
          <p className="text-gray-600">
            That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without
            heaven in place seed it second morning saying.
          </p>
          <div className="text-gray-500 text-sm mt-2">
            <span>Travel, Lifestyle</span> | <span>03 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
