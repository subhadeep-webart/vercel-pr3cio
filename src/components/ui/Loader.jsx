import React from "react";
import { Spinner } from "@heroui/react";

const Loader = ({ size = "md", variant = "simple", className = "" }) => {
  const labelClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <Spinner
      classNames={{ label: `text-foreground mt-4 ${labelClasses[size]} ${className}` }}
      variant={variant}
    />
  );
};

export default Loader;
