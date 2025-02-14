'use client';
import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { clear } from 'console';
import SideBarMenu from './Navigation';

const SideBar = () => {
  const newTourHandler = () => {
    console.log('Create a new tour');
  };

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white px-2 py-2 shadow-lg lg:px-5">
      <div className="flex items-center gap-4">
        <Logo logoWidth={45} logoHeight={45} logoTextSize="20px" />
      </div>
      <Button
        onClick={newTourHandler}
        className="w-full cursor-pointer rounded-md bg-yellow-400 px-3 py-2 text-regular font-medium hover:bg-yellow-300"
      >
        Create a Room +
      </Button>
      <SideBarMenu></SideBarMenu>
    </div>
  );
};

export default SideBar;

// focus styles
// focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
