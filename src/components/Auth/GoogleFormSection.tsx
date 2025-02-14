import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import HorizontalLine from '../ui/HorizontalLine';
import Button from '../ui/Button';
import Link from 'next/link';
interface GoogleFormSectionProps {
  children?: React.ReactNode;
  buttonText: string;
  googleButtonText: string;
  isLoginPage: boolean;
}

const GoogleFormSection: React.FC<GoogleFormSectionProps> = ({
  children,
  buttonText,
  googleButtonText,
  isLoginPage,
}) => {
  return (
    <div className="space-y-4">
      {children}
      <Button className="w-full rounded-md bg-black py-2 text-white">
        {buttonText}
      </Button>

      <div className="space-y-4">
        <div className="flex w-full items-center justify-center gap-4">
          <HorizontalLine />
          <p className="text-[14px] text-gray-400">Or</p>
          <HorizontalLine />
        </div>
        <Button
          className={`flex w-full items-center justify-center bg-[#F3F9FA] text-black`}
        >
          <FcGoogle size={20} />
          <span className="ml-2">{googleButtonText}</span>
        </Button>
      </div>

      {isLoginPage ? (
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[14px] text-gray-400">Don't have an account?</p>
          <Link href="/signup" className="text-[14px] text-link">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[14px] text-gray-400">Already have an account?</p>
          <Link href="/login" className="text-[14px] text-link">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default GoogleFormSection;
