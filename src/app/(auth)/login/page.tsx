import React from 'react';
import InputField from '@/components/common/InputField';
import GoogleFormSection from '@/components/Auth/GoogleFormSection';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <div className="space-y-4">
        <InputField label="Email" placeholder="example@gmail.com" />
        <InputField label="Password" placeholder="********" type="password" />
        <div className="flex justify-end">
          <Link href="#" className="text-[14px] text-link">
            Forgot password?
          </Link>
        </div>
        <GoogleFormSection
          buttonText="Login"
          googleButtonText="Sign in with Google"
          isLoginPage={true}
        />
      </div>
    </div>
  );
};

export default LoginPage;
