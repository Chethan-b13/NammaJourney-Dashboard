import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/logo-without-text.svg';
import Link from 'next/link';

interface LogoProps {
  logoHeight?: number;
  logoWidth?: number;
  logoTextSize?: string;
}

const Logo: React.FC<LogoProps> = ({ logoHeight = 70, logoWidth = 70 }) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        alt="namma journey logo"
        width={`${logoWidth}`}
        height={`${logoHeight}`}
      />
      <h1 className="font-heading font-semibold capitalize">namma journey</h1>
    </Link>
  );
};

export default Logo;
