import React from "react";
import backgroundImage from "../../../assets/Testimonial.png"; // Update with the correct path to your image

const Testimonial = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full object-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for shade */}
      <div className="absolute inset-0 z-10 bg-[#124F9266]"></div>

      <div className="relative z-20 flex items-center justify-center py-12"> {/* Adjusted for padding */}
        <div className="w-full max-w-4xl px-6 text-white flex flex-col justify-start items-start py-7">
          
          {/* Title at Center */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center w-full mb-24 py-4 font-futura">
            History of 41 India
          </h1>

          <div className="">
            {/* Subtitle and Content */}
          <h2 className="text-2xl sm:text-3xl font-futura font-semibold mb-4 mr-9">
            Our History
          </h2>
          <div className="w-[85%]">
          <p className="font-futura text-base sm:text-lg leading-7 mb-4 ">
            On 18th March 1972, Barry W Kay, Chairman of Manchester and
            Stockport 41 Club, brought a letter from Arnold Lucas, the then
            President of Ex-Tablers, UK, inviting India to start the Ex-Tablers
            Movement.
          </p>
          <p className="font-futura text-base sm:text-lg leading-7 mb-4">
            A meeting was held at the Delhi Gymkhana Club with four Past
            Presidents of Round Table India - Viren Khare, Bharat Bhushan, Kavi
            Singh, and Jiti Singh, along with Ex-Tablers SK (Slick) Das Gupta
            and Indu Chandhok. Indu, who had just left Round Table, was
            appointed the Secretary/Treasurer of a non-existent 41 Club. A news
            item regarding the 41 Club also appeared in a local Delhi Daily.
          </p>
          <p className="font-futura text-base sm:text-lg leading-7 mb-4">
            There were three Round Tables in Madras at that time: Nos 1, 3, and
            10. Thirteen Ex-Tablers from these three Tables met at the residence
            of Speedy Jayendra Patel in September of the same year, and the
            Minutes of the 24th June 1972 meeting have been recorded for
            posterity. This club was called 41 Club Madras. The number 1 was
            allotted after other clubs were formed. The meeting elected JN Patel
            as the Chairman, SN Patel as the Vice Chairman, and Indu Chandhok as
            the Secretary/Treasurer.
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
