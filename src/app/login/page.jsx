import LoginForm from "@/components/forms/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-slate-50">
      <div className="w-[90%] md:container mx-auto pt-15  pb-20 space-y-3.5">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-400">Resume your adventure with Wanderlust</p>
        </div>
        <div className="max-w-xl mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
