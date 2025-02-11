import React from 'react';
import Image from 'next/image';
import onBoarding from '../../../public/images/login-bag.svg';
import Logo from '@/components/ui/Logo';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-1 items-start justify-center lg:items-center lg:space-x-[100px]">
        <Image
          src={onBoarding}
          alt="namma journey onboarding illustration"
          className="hidden lg:block"
        />
        <div className="flex w-screen flex-col space-y-8 p-4 md:w-[600px] lg:w-[450px] lg:p-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-regular">
              Plan, manage, and grow your travel business effortlessly.
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
