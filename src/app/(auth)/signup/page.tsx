import React from 'react';
import GoogleFormSection from '@/components/Auth/GoogleFormSection';
import Input from '@/components/ui/Input';

const SignupPage = () => {
  return (
    <div>
      <div className="space-y-4">
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Password" placeholder="********" type="password" />
        <Input
          label="Confirm Password"
          placeholder="********"
          type="password"
        />
        <GoogleFormSection
          buttonText="Sign up"
          googleButtonText="Sign up with Google"
          isLoginPage={false}
        />
      </div>
    </div>
  );
};

export default SignupPage;
