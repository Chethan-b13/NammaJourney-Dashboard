'use client';
import React from 'react';

const Profile = () => {
  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <h4>Varshith Gowda</h4>
      <button
        onClick={handleProfileClick}
        className="rounded-full bg-slate-400 p-2"
      >
        VG
      </button>
    </div>
  );
};

export default Profile;
