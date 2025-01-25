import React from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";

const SignupPage = () => {
  return (
    <div>
      <div className="space-y-4">
        <InputField label="Email" placeholder="example@gmail.com" />
        <InputField label="Password" placeholder="********" type="password" />
        <InputField
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
