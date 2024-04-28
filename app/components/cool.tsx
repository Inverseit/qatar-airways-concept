import Image from "next/image";

const Cool = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-qamain">
    <div className="container mx-auto py-12">
      <div className="flex mt-14 flex-wrap items-center justify-start md:border-l-2 md:pl-10 p-10 pt-20 border-qagray">
        <div className="w-full md:w-2/5 z-10">
          <div className="font-title">
            <h2 className="md:text-8xl text-6xl font-bold mb-2 drop-shadow-lg">
              Explore
            </h2>
          </div>
          <p className="mb-8 text-2xl md:text-3xl mt-4 text-shadow">
            At Qatar Airways Museum, we celebrate the rich history and
            innovation of aviation. Our museum offers a unique and immersive
            experience, showcasing the journey of Qatar Airways and the broader
            world of flight.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute md:top-0 right-0 md:w-1/2  md:h-full blur-xs bottom-0 h-1/2 w-full">
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
        <Image src="/interior.webp" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
);

export default Cool;
