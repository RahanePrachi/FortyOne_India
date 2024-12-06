import React from 'react'
import HistroyHeader from './HistoryHeader'
import aboutImg from "../../../assets/aboutImg.png";
import historyImg1 from "../../../assets/historyImg1.png"
import historyImg2 from "../../../assets/historyImg2.png"
const History = () => {
  return (
    <div>
      
      <HistroyHeader/>

      {/* about content */}
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto p-10 relative gap-5">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-1/2 gap-8 justify-between">
          <div>
            <div className="inline fond-bold font-lato  mt-1 text-uppercase border text-[10.96px] font-normal leading-[15.57px] tracking-[0.415em] text-left px-2 py-1 ">
              About Us
            </div>
            <p className="text-4xl font-montserrat font-semibold py-3">
              About 41 India
            </p>
          </div>
          <div className="font-montserrat text-[#545454] flex flex-col gap-3">
            <p>
            The 41 Club in India began on March 18, 1972, when Barry W Kay from Manchester brought an invitation from the Ex-Tablers, UK, to start the Ex-Tablers Movement in India. The first meeting at Delhi Gymkhana Club with past Round Table India Presidents and Ex-Tablers led to the formation of the 41 Club Madras later that year.
            </p>
            <p>
            Growth was initially slow, with just five clubs by 1980, but this milestone allowed the formation of the National Association, with Indu Chandhok as the first President. The Association grew steadily, with several more clubs forming across India and the first AGM held in 1981. The National Association of 41 Clubs of India was officially affiliated with the International Association in 1982.
            </p>
            <p>
            Over the years, leadership rotated across various regions, and the club expanded significantly, fostering strong friendships and organizing events like the first International AGM in India in 1992. Today, the 41 Club in India is a vibrant community with a rich history, supported by a central Secretariat in Chennai.
            </p>

            <p>
            Presidents in the following years included notable leaders like Nainu Sekharan, V Sagar Gulati, P.N. Ethiraj, S. Raja, Viji Iyengar, Ashok Das Gupta, Gorur Shyam Murthy, Alban E Scott, Micky Oberoi, Sameer Nayyar, Alok Harnathka, Krishna Kumar NS, Debashis Roy, Pratheep Kumar, Balbir Verma, Dr. V Siddharthan, Rohit Pombra, Ajit Khullar, Dr. Manoj Kapoor, Sridharan Chettiar, Gopal Chopra, Harsh Sehgal, Rajiv Mehra, Siva Rama Krishna Babji, RP Venkatesh, Pankaj Singh, Bikram Kesari Singh Deo, and Srinivasu Saraswatula.
            </p>

            <p>
            This dedicated leadership helped the Association grow and thrive, ensuring its continued success and impact.
            </p>
          </div>
          

         
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 rounded-md">
          <img
            src={aboutImg}
            alt="About Image"
            className="w-full h-[80%] object-cover rounded-md"
          />
        </div>
      </div>

      {/* overview section */}

      <div className='w-10/12 mx-auto p-12'>
        <p className='font-montserrat font-semibold text-2xl p-3'>Overview</p>
        <div>
        <img
            src={historyImg1}
            alt="About Image"
            className="w-full h-[80%] object-cover rounded-md"
          />
           <img
            src={historyImg2}
            alt="About Image"
            className="w-full h-[80%] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default History
