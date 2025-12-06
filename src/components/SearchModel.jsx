import React, { useState } from 'react';

const SearchModel = ({ active, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!active) return null;

  return (
    <div className="search-overlay">
      <div className="w-full max-w-4xl px-4">
        <form className="flex items-center justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full max-w-[500px] text-4xl border-none border-b-2 border-gray-border bg-transparent text-gray-text focus:outline-none"
          />
        </form>
        <button
          onClick={onClose}
          className="absolute w-12 h-12 bg-[#333] text-white text-center rounded-full text-3xl leading-[48px] top-8 right-8 cursor-pointer hover:bg-primary transition-all-3"
        >
          <i className="fa fa-times leading-[48px]"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchModel;
