"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="secondary" size={"icon"}>
      <ChevronLeft className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;
