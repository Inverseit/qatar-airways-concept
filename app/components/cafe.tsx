import Image from "next/image";

const Cafe = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-qamain">
    <div className="container mx-auto py-12">
      <div className="flex mt-14 flex-wrap items-center justify-start md:border-l-2 md:pl-10 p-10 pt-20 border-qagray">
        <div className="w-full md:w-3/5 z-10">
          <div className="font-title">
            <h2 className="md:text-8xl text-6xl font-bold mb-2 drop-shadow-lg">
              Dining
            </h2>
          </div>
          <p className="mb-8 text-2xl md:text-3xl mt-4 w-2/5 text-shadow-[0_8px_10px_#747F8A]">
            Unwind in our museum&apos;s cafe, where aviation-themed decor meets a
            relaxed atmosphere, offering a unique place to refuel during your
            visit.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute md:top-0 right-0 md:w-3/5  md:h-full  bottom-0 h-1/2 w-full">
      {/* Image */}
      <div
        style={{
          zIndex: "1",
          width: "100%",
          height: "100%",
          background: "black",
          position: "relative",
        }}
      >
        <Image src="/cafe.webp" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
);

export default Cafe;
