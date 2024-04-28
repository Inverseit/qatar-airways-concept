import Image from "next/image";

const FirstClass = () => (
  <div className="text-white relative h-min-full h-full bg-qamain">
    <div className="absolute md:top-0 left-0 md:w-1/2 rounded-lg  md:h-full bottom-0 h-1/2 w-full">
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
        <Image src="/firstclass.webp" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="container mx-auto py-12">
      <div className="flex mt-14 flex-wrap items-end justify-end md:border-r-2 md:pl-10 p-10 pt-20 border-qagray">
        <div className="w-full md:w-2/5 z-10">
          <div className="font-title text-right">
            <h2 className="md:text-8xl text-6xl font-bold mb-2 drop-shadow-lg">
              First Class Experience
            </h2>
          </div>
          <p className="mb-8 text-2xl md:text-3xl mt-4 text-shadow text-right">
          For a taste of luxury, explore the first-class experience module, designed to replicate the comfort and elegance of a premium cabin.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FirstClass;
