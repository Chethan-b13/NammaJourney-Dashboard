import { Bell } from 'lucide-react';
import React from 'react';

const Notification = () => {
  return (
    <div className="relative py-2">
      <p className="absolute right-[2px] top-2 h-2 w-2 rounded-full bg-red-400"></p>
      <Bell />
    </div>
  );
};

export default Notification;
