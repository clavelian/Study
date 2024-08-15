import ModeToggle from "@/components/lnd";

ModeToggle;
export default function Home() {
  return (
    <>
      <nav>
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </nav>
      <main>
        <p>HELLO WORLD</p>
      </main>
    </>
  );
}
