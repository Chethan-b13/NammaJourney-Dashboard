'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const name = 'Varshith Gowda';

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  const getInitails = (name: string) => {
    const names = name.split(' ');
    console.log(names.length);

    if (names.length > 1) {
      return names[0][0] + names[1][0];
    } else {
      return names[0][0] + names[0][1];
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <p className="font-body text-body">{name}</p>
      <Avatar>
        <AvatarImage />
        <AvatarFallback className="bg-slate-500 text-white">
          {getInitails(name).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Profile;
