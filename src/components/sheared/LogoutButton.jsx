"use client";
import { authClient } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
    const router = useRouter()
  const handleDlt = async () => {
    await authClient.signOut();
    router.refresh("/")
    redirect("/")
  };
  return (
    <Button onClick={handleDlt} variant="danger-soft">
      Logout
    </Button>
  );
};

export default LogoutButton;
