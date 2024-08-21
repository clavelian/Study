"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Num = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Button value={1} className="">
        1
      </Button>
    </>
  );
};

export default Num;
