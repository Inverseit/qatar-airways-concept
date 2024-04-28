import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="w-full flex flex-col justify-center pb-4 md:pb-6 bg-white py-4 md:py-6 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The expericence
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10 flex justify-center">
            <dl className="space-y-10 w-4/5 md:w-full md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10 text-center">
            {/* Column 1 */}
            <div className="relative">
              <dt>
                <Image
                  src="/assets/whatwedo/second.png"
                  alt="Technological Prototype"
                  className="mx-auto h-48 w-48 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mt-5 text-lg md:text-xl lg:text-3xl leading-6 font-bold text-cmured">
                  Dine 
                </p>
              </dt>
              <dd className="mt-2 text-lg md:text-lg lg:text-xl  text-black">
                We support students on different paths with informed awareness
                about collective responsibility, using hands-on practice guided
                by experts{" "}
                <span className="text-cmured">
                  at one of the top universities in the world
                </span>
              </dd>
            </div>

            {/* Column 2 */}
            <div className="relative">
              <dt>
                <Image
                  src="/assets/whatwedo/first.png"
                  alt="Student Empowerment"
                  className="mx-auto h-48 w-48 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mt-5 text-lg md:text-xl lg:text-3xl leading-6 font-bold text-cmured">
                  Workshops
                </p>
              </dt>
              <dd className="mt-2 text-lg md:text-lg lg:text-xl  text-black">
                We engage rising changemakers and harness{" "}
                <span className="text-cmured"> technology </span> to tackle the
                challenges of humanitarian crises{" "}
                <span className="text-cmured"> on the ground </span> and within
                the
                <span className="text-cmured"> digital sphere</span>
              </dd>
            </div>

            {/* Column 3 */}
            <div className="relative">
              <dt>
                <Image
                  src="/assets/whatwedo/third.png"
                  alt="Entrepreneurship"
                  className="mx-auto h-48 w-48 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mt-5 text-lg md:text-xl lg:text-3xl leading-6 font-bold text-cmured">
                  Learn History
                </p>
              </dt>
              <dd className="mt-2 text-lg md:text-xl lg:text-xl  text-black">
                We{" "}
                <span className="text-cmured">
                  {" "}
                  enable humanitarian progress{" "}
                </span>{" "}
                by highlighting promising work that inspires and engages
                contributors at the frontline of global responsibility
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
