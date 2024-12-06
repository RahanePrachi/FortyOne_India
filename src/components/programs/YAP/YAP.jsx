import React from "react";
import RegistrationForm from "./RegistrationForm";
import aboutImg from "../../../assets/YAP_image.png";
import coverImg from "../../../assets/bg_yajp.jpeg";
const YAP = () => {
  const data = [
    ["Europe South Tour", "Chennai", "Hyderabad", "India", "14/07/2024 - 04/08/2024"],
    ["Europe South Tour", "Kolkata", "New Delhi", "India", "14/07/2024 - 04/08/2024"],
    ["Great Britain & Ireland", "Coimnatore", "Hyderabad", "India", "14/07/2024 - 04/08/2024"],
    ["South Africa Tour", "Hyderabad", "Delhi", "India", "14/07/2024 - 04/08/2024"],
  ];
  const data0 = [
    ["Europe South Tour", "Chennai", "Hyderabad", "India", "14/07/2024 - 04/08/2024"],
    ["Europe South Tour", "Kolkata", "New Delhi", "India", "14/07/2024 - 04/08/2024"],
  ];
  return (
    <div>
      {/* Header */}
      <div
        className="relative bg-cover bg-center w-full object-contain h-[490px]"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      >
        {/* Overlay for shade */}
        <div className="absolute inset-0 z-10 bg-[#124F9266]"></div>

        <div className="relative z-20 flex items-center justify-center h-full">
          {/* Content container */}
          <div className="text-white text-center w-[50%] ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-7 font-futura">
              Young Ambassador Program (YAPs)
            </h1>
          </div>
        </div>
      </div>

      {/* About  */}

      <div className="flex flex-col lg:flex-row w-10/12 mx-auto pt-5 relative gap-5">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 justify-between">
          <div>
            <div className="inline fond-bold font-lato  mt-1 text-uppercase border text-[10.96px] font-normal leading-[15.57px] tracking-[0.415em] text-left px-2 py-1 ">
              About Us
            </div>
            <p className="text-4xl font-montserrat font-semibold py-3">
              About 41 India
            </p>
            <div className="font-montserrat text-[#545454] flex flex-col gap-3">
              <p>
                The Young Ambassador Program more popularly known as ‘YAPs’ is a
                flagship activity of 41 International for the children of the
                members of 41 clubs all over the world. YAP seeks to promote
                exchange visits between children groups of India, Europe and
                other countries. This program gives a great opportunity to the
                young adults to meet people of various ethnicity, learn foreign
                cultures and see new places, all of which are a huge learning
                experience for them.
              </p>{" "}
              <p>
                The YAP seeks to promote exchange visits between the children of
                parents who are members of 41 Clubs.
              </p>
              {/* Objectives Section */}
              <div className=" font-montserrat text-[#545454] flex flex-col gap-3">
                <h2 className=" ">Objectives</h2>
                <ul className="list-decimal list-inside space-y-2 ">
                  <li>
                    Exposing children to different cultures, lifestyles, and
                    histories
                  </li>
                  <li>
                    Building friendships and close relationships across
                    continents
                  </li>
                  <li>
                    Developing confidence, trust, and international
                    understanding
                  </li>
                </ul>
              </div>
              {/* Requirements Section */}
              <div className=" font-montserrat text-[#545454] flex flex-col gap-3">
                <h2 className="">Requirements to be an Ambassador</h2>
                <ul className="list-decimal list-inside space-y-2 ">
                  <li>You must be between 18 and 25 years of age</li>
                  <li>
                    You have a working knowledge of English and are able to
                    express yourself in the language of the host country
                  </li>
                  <li>You are prepared to travel wherever required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 rounded-md">
          <img
            src={aboutImg}
            alt="About Image"
            className="w-full h-[70%] object-cover rounded-md"
          />
        </div>
      </div>

      {/* table */}

      <div className=" font-semibold border-t border-gray-300 shadow-lg rounded-md bg-white mb-8 p-4 w-10/12 mx-auto">
        {/* heading */}
        <div className="text-center">
        <p className="font-montserrat font-bold text-3xl text center">Inbound YAP 2024</p>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-collapse border-spacing-0">
            <thead>
              <tr className="border-b border-gray-300 text-[#718096]">
                {[
                  "Program",
                  "Arrival City ",
                  "Departure City",
                  "Countries",
                  "Dates",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 "
                  >
                    <div className=" bg-white p-2 text-center">
                      {header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data0.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-300">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">
                      <div className=" p-2 text-center text-[#111827]">
                        {cell}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className=" font-semibold border-t border-gray-300 shadow-lg rounded-md bg-white mb-8 p-4 w-10/12 mx-auto">
        {/* heading */}
        <div className="text-center">
        <p className="font-montserrat font-bold text-3xl text center">Outbound YAP 2024</p>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-collapse border-spacing-0">
            <thead>
              <tr className="border-b border-gray-300 text-[#718096]">
                {[
                  "Program",
                  "Arrival City ",
                  "Departure City",
                  "Countries",
                  "Dates",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 "
                  >
                    <div className=" bg-white p-2 text-center">
                      {header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-300">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">
                      <div className=" p-2 text-center text-[#111827]">
                        {cell}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration form */}
      <div className="bg-[#124F92] w-full ">
        <RegistrationForm/>
      </div>
    </div>
  );
};

export default YAP;
