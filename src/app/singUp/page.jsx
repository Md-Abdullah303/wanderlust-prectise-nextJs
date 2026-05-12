import { SignUpForm } from "@/components/forms/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-[70%] md:container mx-auto pt-15 bg-slate-50 pb-20 space-y-3.5">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-400">Start your adventure with Wanderlust</p>
      </div>
      <div className="max-w-xl mx-auto">
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignUpPage;
