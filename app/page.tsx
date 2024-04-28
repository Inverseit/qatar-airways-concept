import Cool from "./components/cool";
import Sim from "./components/sim";
import Cool2 from "./components/cool2";
import FirstClass from "./components/first-class";
import Cafe from "./components/cafe";

export default function Home() {
  return (
    <main className="flex min-h-screen overlay flex-col bg-qamain items-center justify-around">
      <div className="w-full h-full z-10 bg-black">
        <div className="w-full min-h-screen bg-main bg-no-repeat relative items-start justify-start flex-col flex p-24 bg-blend-overlay">
          <span className="text-6xl text-center md:text-8xl text-qamain text-shadow-[0_8px_10px_#747F8A] fond-bold uppercase">
            Qatar
          </span>
          <span className="text-6xl text-center md:text-8xl text-qamain text-shadow-[0_8px_10px_#747F8A] fond-bold uppercase">
            Airways
          </span>
          <span className="text-6xl text-center md:text-8xl text-qamain text-shadow-[0_8px_10px_#747F8A] fond-bold uppercase">
            Museum
          </span>
        </div>
      </div>
      <Cool/>
      <Sim/>
      <Cool2/>
      <FirstClass/>
      <Cafe/>
    </main>
  );
}
