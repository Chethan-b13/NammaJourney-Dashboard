import React from 'react';
import GoogleFormSection from '@/components/Auth/GoogleFormSection';
import Link from 'next/link';
import Input from '@/components/ui/Input';

const LoginPage = () => {
  return (
    <div>
      <div className="space-y-4">
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Password" placeholder="********" type="password" />
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
