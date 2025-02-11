import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex-1 items-center justify-center">
      <input
        placeholder="Search"
        className="w-full rounded-md border px-4 py-2 shadow-sm hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
      ></input>
    </div>
  );
};

export default SearchBar;
