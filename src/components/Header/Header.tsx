import React from 'react';
import SearchBar from './SearchBar';
import Notification from './Notification';
import Profile from './Profile';

const Header = () => {
  return (
    <div className="flex-1 px-4">
      <div className="flex justify-between gap-2 border-b py-5 lg:gap-10 lg:px-4">
        <div className="flex items-center">
          <p className="font-body text-body">Travels</p>
        </div>
        <SearchBar />
        <div className="flex items-center gap-2 lg:gap-6">
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
