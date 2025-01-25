import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo-without-text.svg";
import onBoarding from "../../../public/images/login-bag.svg";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex items-start lg:items-center justify-center flex-1 lg:space-x-[100px]">
        <Image
          src={onBoarding}
          alt="namma journey onboarding illustration"
          className="hidden lg:block"
        />
        <div className="p-4 flex flex-col w-screen lg:p-8 space-y-8 lg:w-[450px] md:w-[600px]">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src={logo}
                alt="namma journey logo"
                width={"70"}
                height={"70"}
              />
              <h1 className="font-heading text-[30px] font-medium">
                namma journey
              </h1>
            </div>
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
