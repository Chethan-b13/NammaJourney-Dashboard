import { HousePlus } from 'lucide-react';
import React from 'react';
import NavLink from '../ui/NavLink';

const SideBarMenu = () => {
  return (
    <div>
      <ul className="flex flex-col gap-6 px-6 py-6">
        <li className="flex items-center gap-4">
          <HousePlus />
          <NavLink href="/trips">Navigation</NavLink>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <NavLink href="/trips">Navigation</NavLink>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <NavLink href="/trips">Navigation</NavLink>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <NavLink href="/trips">Navigation</NavLink>
        </li>
        <li className="flex items-center gap-4">
          <HousePlus />
          <NavLink href="/trips">Navigation</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
