import { HousePlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SideBarMenu = () => {
  return (
    <div>
      <ul className="flex flex-col gap-6 px-6 py-6">
        <li className="flex items-center gap-4">
          <HousePlus />
          <Link href="/trips">Navigation</Link>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <Link href="/trips">Navigation</Link>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <Link href="/trips">Navigation</Link>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <Link href="/trips">Navigation</Link>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <Link href="/trips">Navigation</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
