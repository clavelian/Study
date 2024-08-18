import ModeToggle from "@/components/lnd";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
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
          <Button variant="outline" size="icon">
            <ChevronRight className="h-10 w-10" />
          </Button>
        </div>
      </main>
    </>
  );
}
