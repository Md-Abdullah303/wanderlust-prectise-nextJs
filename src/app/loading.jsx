import { Spinner } from "@heroui/react";
import React from "react";

const loadingPage = () => {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
};

export default loadingPage;
