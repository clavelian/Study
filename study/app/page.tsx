import ModeToggle from "@/components/lnd";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="flex items-center justify-center">
          <nav className="absolute top-4 right-4">
            <div>
              <ModeToggle />
            </div>
          </nav>
        </div>
        <div>
          fuck you
        </div>
      </main>
    </>
  );
}
