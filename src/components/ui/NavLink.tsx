'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path.startsWith(href) ? '' : ''} font-body text-body`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
