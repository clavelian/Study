"use client";
import ModeToggle from "@/components/lnd";
<<<<<<< Updated upstream
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
=======
import MyComponent from "@/components/number";
>>>>>>> Stashed changes

export default function Home() {
  const [value, useValue] = useState(0);
  return (
    <>
      <main className="flex justify-center items-center h-[100vh]">
        <div className="flex items-center justify-center">
          <nav className="absolute top-4 right-4">
            <div>
              <ModeToggle />
            </div>
          </nav>
        </div>
        <div className="flex content-center justify-center place-items-center">
<<<<<<< Updated upstream
          <Button value={1} variant="outline" size="icon">
            <ChevronRight className="h-10 w-10" />
          </Button>
=======
          <MyComponent />
>>>>>>> Stashed changes
        </div>
      </main>
    </>
  );
}
