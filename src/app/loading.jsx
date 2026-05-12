import { Spinner } from "@heroui/react";
import React from "react";

const loadingPage = () => {
  return (
    <div className="flex h-[80vh] justify-center items-center gap-4">
      <Spinner />
    </div>
  );
};

export default loadingPage;
