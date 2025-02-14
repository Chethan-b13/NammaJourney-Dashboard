import React from 'react';
import Input from '../ui/Input';

const SearchBar = () => {
  return (
    <div className="flex-1 items-center justify-center">
      <Input placeholder="Search" type="search" />
    </div>
  );
};

export default SearchBar;
