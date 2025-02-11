import Header from '@/components/Header/Header';
import SideBar from '@/components/sidebar/SideBar';
import React from 'react';

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-full flex-row p-4">
      <SideBar />
      <div className="flex-1 px-4">
        <Header />
      </div>
    </div>
  );
};

export default DashboardLayout;
