import React, { useEffect, useState } from "react";
import aboutImg from "../../../assets/aboutImg.png";
import { FcApproval } from "react-icons/fc";
import Testimonial from "./Testimonial";
import { useForm } from "react-hook-form";
import FeatureProject from "./FeatureProject";
import AboutCarousel from "../../about_us/AboutCarousel";

const About = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Contact data:", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",

        message: "",
        theme: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div>
      {/* header Section */}
      <AboutCarousel/>

      {/* About us section */}

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
              41 India is a pan India service organisation made up of past
              Tablers (members of Round Table India) above the age of 40 years.
              41 India is a fellowship organisation and works closely with the
              Tables across India to serve the needy and underprivileged.{" "}
            </p>
            <p>
              41 India has over 220 active chapters (called 41 Clubs) spread in
              over 75 cities across the country with over 3,000 members.
              Membership is open only to past Tablers over the age of 40. It’s
              an association for life.
            </p>
            <p>
              41 India has 41 Clubs (chapters in India) as its members and
              individual members or 41ers are members of the Clubs. 41ers are
              entrepreneurs & successful businessmen in SME/MSME sector,
              successful senior executives in large corporations and hold
              position of prominence in various business bodies like YPO, CII,
              ASSOCHAM, BNI and Rotary amongst others. They are also successful
              professionals like Chartered Accountants, Lawyers, Architects,
              Trainers and Coaches. They are thought leaders, successful
              individuals with large hearts. They contribute their time, money &
              efforts for betterment of the society as well as their brethren &
              their families.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <FcApproval className="w-[16px] h-[16px]" />
              <p>In 75+ Cities</p>
            </div>

            <div className="flex items-center gap-2 mt-4">
            <FcApproval className="w-[16px] h-[16px]"/>
              <p>In 3000+ Members</p>
            </div>
          </div>

          <button className="mt-6 bg-[#124F92] text-white py-3 px-4 rounded-full w-[157px] font-montserrat font-semibold">
            Learn More
          </button>
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

      {/* feature project section */}
      <div className=" ">
        <FeatureProject />
      </div>

      {/* history section:TestimonialsV2 */}

      <div>
        <Testimonial />
      </div>

      {/* Contact Section */}
      <div className=" bg-[#F1F6FA]  p-12 relative ">
        <div className="flex flex-col lg:flex-row  w-9/12 mx-auto gap-8  justify-between">
          {/* Left Part  */}
          <div className="flex flex-col justify-between lg:w-[40%] w-full gap-9">
            <div className="flex flex-col gap-20">
              <p className="font-custom font-bold text-3xl h-[38px] ">
                Have any questions? <br />
                Contacts us !
              </p>

              <p className="text-[#9497A1] text-sm font-normal ">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-[18px]">
              <div>
                <p className="text-[#9497A1] text-sm font-normal">
                  Email address
                </p>
                <p className="text-[#292D33] font-bold text-sm">
                  office41india@gmail.com
                </p>
              </div>
              <div>
                <p className="text-[#9497A1] text-sm font-normal">
                  Phone number
                </p>
                <p className="text-[#292D33] font-bold text-sm">
                  (+91) 7358673241
                </p>
              </div>

              <div>
                <p className="text-[#9497A1] text-sm font-normal">Address</p>
                <p className="text-[#292D33] font-bold text-sm">
                  41 India ,<br />
                  Round Table House, 3rd Floor 80, <br />
                  Nungambakkam High Road, Chennai – 600 034
                </p>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <form
            className="flex flex-col gap-3 bg-white p-8 lg:w-[40%] w-full shadow-lg rounded-md"
            onSubmit={handleSubmit(submitContactForm)}
          >
            <p className="font-montserrat font-extrabold text-2xl">
              Contact Us
            </p>

            <div className="flex flex-col  bg-white">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Abdrea"
                className=" p-2 border-[#9497A1] border-b-2"
                {...register("name", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="andrea@gmol.com"
                className=" p-2 border-[#9497A1] border-b-2"
                {...register("email", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="theme" className="lable-style">
                Theme
              </label>
              <input
                type="text"
                name="theme"
                id="theme"
                placeholder="Job"
                className=" p-2 border-[#9497A1] border-b-2"
                {...register("theme", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="lable-style ">
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
                className=" p-2 border-[#9497A1] border-b-2"
                {...register("message", { required: true })}
              />
            </div>

            <div className="flex items-end justify-end mt-5">
              <button
                disabled={loading}
                type="submit"
                className={`rounded-[4.5px] bg-[#185CFF] px-8 py-2 text-center text-[13px] font-bold  flex items-end   text-white ] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  sm:text-[16px] `}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
