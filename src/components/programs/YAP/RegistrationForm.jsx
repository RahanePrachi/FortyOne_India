import React from "react";
import { TbCloudUpload } from "react-icons/tb";
import { useState } from "react";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    passportNo: "",
    Nationality: "",
    email: "",
    motherTongue: "",
    mobileno: "",
    profession: "",
    address: "",
    city: "",
    pincode: "",
    fName: "",
    fClub: "",
    fmobno: "",
    femail: "",
    educationalhistory: "",
    finalDegree: "",
    yapsTour: "",
    contries: "",
  });

  const {
    firstName,
    lastName,
    dob,
    passportNo,
    Nationality,
    email,
    motherTongue,
    mobileno,
    profession,
    address,
    city,
    pincode,
    fName,
    fClub,
    fmobno,
    femail,
    educationalhistory,
    finalDegree,
    yapsTour,
    contries,
  } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const FormData = {
      ...formData,
    };
    console.log("Form data: ", FormData);

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <div className=" w-10/12 mx-auto  py-14 rounded-md">
        <div className="bg-[#DAECFF] p-12 rounded-md">
      <div className="text-center">
        <p className="font-montserrat font-bold text-3xl pb-4">Registration Form</p>
      </div>
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4 ">
        {/* Personal info */}
        <div className="flex w-full flex-col gap-y-4 ">
          <p className="font-montserrat font-semibold text-2xl r">
            Personal Information
          </p>
          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                First Name <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Last Name <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166] "
              />
            </label>
          </div>
          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Date of Birth <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="dob"
                value={dob}
                onChange={handleOnChange}
                placeholder="DD-MM-YYYY"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Passport Number<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="passportNo"
                value={passportNo}
                onChange={handleOnChange}
                placeholder="Enter your passport number"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Nationality <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="Nationality"
                value={Nationality}
                onChange={handleOnChange}
                placeholder="Enter your nationality"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Gender<sup className="text-red-700">*</sup>
              </p>
              <div className="flex items-center bg-white w-full rounded-[0.5rem] p-[12px] space-x-4 text-[#586166]">
                {/* Male Option */}
                <label className="flex items-center space-x-2">
                  <input
                    required
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleOnChange}
                    className="w-4 h-4 rounded-full border-gray-400 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-richblack-5">Male</span>
                </label>

                {/* Female Option */}
                <label className="flex items-center space-x-2 text-[#586166]">
                  <input
                    required
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleOnChange}
                    className="w-4 h-4 rounded-full border-gray-400 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-richblack-5">Female</span>
                </label>
              </div>
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Mother Tongue
              </p>
              <input
                required
                type="text"
                name="motherTongue"
                value={motherTongue}
                onChange={handleOnChange}
                placeholder="Enter your mother tongue"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Mobile Number<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="number"
                name="mobileno"
                value={mobileno}
                onChange={handleOnChange}
                placeholder="Enter your mobile number"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Email <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your mother tongue"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Profession<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="profession"
                value={profession}
                onChange={handleOnChange}
                placeholder="Enter your mobile number"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Address <sup className="text-red-700">*</sup>
            </p>
            <textarea
              required
              name="address"
              value={address}
              onChange={handleOnChange}
              placeholder="Enter your address"
              rows="4" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                City <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="city"
                value={city}
                onChange={handleOnChange}
                placeholder="Enter your city"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                PinCode<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="number"
                name="pincode"
                value={pincode}
                onChange={handleOnChange}
                placeholder="Enter your pincode"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>
        </div>

        {/* Father's info */}

        <div className="flex w-full flex-col gap-y-4 ">
          <p className="font-montserrat font-semibold text-2xl r">
            Personal Information
          </p>
          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Father's Name <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="fName"
                value={fName}
                onChange={handleOnChange}
                placeholder="Enter father's name"
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Father's Club <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="fClub"
                value={fClub}
                onChange={handleOnChange}
                placeholder="Enter Father's Club"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166] "
              />
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Father's Mobile Number <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="number"
                name="fmobno"
                value={fmobno}
                onChange={handleOnChange}
                placeholder="Enter father's mobile number"
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Father's Email <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="femail"
                value={femail}
                onChange={handleOnChange}
                placeholder="Enter father's email"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166] "
              />
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                City <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="city"
                value={city}
                onChange={handleOnChange}
                placeholder="Enter your city"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                PinCode<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="number"
                name="pincode"
                value={pincode}
                onChange={handleOnChange}
                placeholder="Enter your pincode"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>
        </div>

        {/* Educational Information */}
        <div className="flex w-full flex-col gap-y-4 ">
          <p className="font-montserrat font-semibold text-2xl r">
            Educational Information
          </p>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Educational History
            </p>
            <textarea
              required
              name="educationalhistory"
              value={educationalhistory}
              onChange={handleOnChange}
              placeholder="Enter your educational history"
              rows="3" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Final Degree <sup className="text-red-700">*</sup>
            </p>
            <textarea
              required
              name="finalDegree"
              value={finalDegree}
              onChange={handleOnChange}
              placeholder="Enter your final degree"
              rows="2" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>
        </div>

        {/* other information */}

        <div className="flex w-full flex-col gap-y-4 ">
          <p className="font-montserrat font-semibold text-2xl r">
            Other Information
          </p>

          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Have you ever travelled on a YAPS tour?
                <sup className="text-red-700">*</sup>
              </p>
              <div className="relative">
                <select
                  required
                  name="yapsTour"
                  value={yapsTour} // Update state variable to match
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
                >
                  <option value="Yes">Yes</option>
                  <option value="No" disabled>
                    No
                  </option>
                </select>
                {/* Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#586166]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>

            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Which countries have you travelled to? (with and without YAPS)
                <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="contries"
                value={contries}
                onChange={handleOnChange}
                placeholder="Which countries have you travelled to? "
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
          </div>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Which YAP Tour are you interested in?
              <sup className="text-red-700">*</sup>
            </p>
            <div className="relative">
              <select
                required
                name="yapsTour"
                value={yapsTour} // Update state variable to match
                onChange={handleOnChange}
                className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
              >
                <option value="Europe_South_Tour">Europe South Tour</option>
                <option value="India_South_Tour" disabled>
                  India South Tour
                </option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#586166]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </label>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Mother Tongue
              </p>
              <input
                required
                type="text"
                name="motherTongue"
                value={motherTongue}
                onChange={handleOnChange}
                placeholder="Enter your mother tongue"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Mobile Number<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="number"
                name="mobileno"
                value={mobileno}
                onChange={handleOnChange}
                placeholder="Enter your mobile number"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Email <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your mother tongue"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Profession<sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="profession"
                value={profession}
                onChange={handleOnChange}
                placeholder="Enter your mobile number"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Do you participate in any sports or other activities?
            </p>
            <textarea
              required
              name="sportActivity"
              //value={sportActivity}
              onChange={handleOnChange}
              placeholder="Do you participate in any sports or other activities?"
              rows="3" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Do you have any diseases, allergies or medical information you
              wish to inform us about? <sup className="text-red-700">*</sup>
            </p>
            <textarea
              required
              name="mediacalInfo"
              //value={medicalInfo}
              onChange={handleOnChange}
              placeholder="Do you have any diseases, allergies or medical information you wish to inform us about?"
              rows="3" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>

          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Are you smoker?
              </p>
              <div className="relative">
                <select
                  required
                  name="smoker"
                  //value={smoker} // Update state variable to match
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
                >
                  <option value="Yes" disabled>
                    Yes
                  </option>
                  <option value="No">No</option>
                </select>
                {/* Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#586166]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>

            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Are you a drinker?
              </p>
              <div className="relative">
                <select
                  required
                  name="drinker"
                  //value={drinker}
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
                >
                  <option value="Yes" disabled>
                    Yes
                  </option>
                  <option value="No">No</option>
                </select>
                {/* Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#586166]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Have you ever travelled on a YAPS tour?
                <sup className="text-red-700">*</sup>
              </p>
              <div className="relative">
                <select
                  required
                  name="yapsTour"
                  //value={yapsTour} // Update state variable to match
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
                >
                  <option value="Yes">Yes</option>
                  <option value="No" disabled>
                    No
                  </option>
                </select>
                {/* Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#586166]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>

            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Which countries have you travelled to? (with and without YAPS)
                <sup className="text-red-700">*</sup>
              </p>
              <input
                required
                type="text"
                name="contries"
                //value={contries}
                onChange={handleOnChange}
                placeholder="Which countries have you travelled to? "
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
          </div>

          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Are you a vegetarian?
              </p>
              <div className="relative">
                <select
                  required
                  name="vegetarian"
                  //value={vegetarian} // Update state variable to match
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-white p-[12px] text-[#586166] appearance-none"
                >
                  <option value="Yes" disabled>
                    Yes
                  </option>
                  <option value="No">No</option>
                </select>
                {/* Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#586166]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Is there any additional information you wish to provide?
            </p>
            <textarea
              required
              name="aditionalInfo"
              //value={additionalInfo}
              onChange={handleOnChange}
              placeholder="Is there any additional information you wish to provide?"
              rows="3" // Adjust the number of rows as needed
              className="w-full rounded-[0.5rem]  p-[12px] "
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Upload a copy of your passport{" "}
              <sup className="text-red-700">*</sup>
            </p>
            <div className="relative">
              <input
                required
                type="file"
                name="passportCopy"
                accept=".pdf, .jpg, .jpeg, .png"
                placeholder="select file"
                onChange={handleOnChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white"
              />
              <div className="flex items-center justify-end w-full rounded-[0.5rem] bg-white p-[8px]  border border-gray-300">
                {/* Upload Icon */}
                <span className="flex items-center justify-center p-2 border border-gray-300 rounded-md">
                  <TbCloudUpload className="text-lg text-gray-600 h-6 w-14" />
                </span>
              </div>
            </div>
          </label>
        </div>

    {/* payment information */}
    <div className="flex w-full flex-col gap-y-4 ">
          <p className="font-montserrat font-semibold text-2xl r">
            Payment Information
          </p>
          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Please provide the UTR of your payment 
              </p>
              <input
                required
                type="text"
                name="paymentInfo"
               
                onChange={handleOnChange}
                placeholder="Enter transaction UTR "
                className="w-full rounded-[0.5rem] p-[12px] text-[#5E6366]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Enter the bank where your payment was made
              </p>
              <input
                required
                type="text"
                name="bankpaymentmade"
               
                onChange={handleOnChange}
                placeholder="Enter bank from which payment was made"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166] "
              />
            </label>
          </div>
          <div className="flex gap-x-4 ">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
              Enter the bank branch where your payment was made
              </p>
              <input
                required
                type="text"
                name="bankbranch"
                
                onChange={handleOnChange}
                placeholder="Enter the bank branch where your payment was made"
                className="w-full rounded-[0.5rem] p-[12px] text-[#586166]"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#586166]">
                Payment Date
              </p>
              <input
                
                type="text"
                name="paymentDate"
                
                onChange={handleOnChange}
                placeholder="DD-MM-YYYY"
                className="w-full rounded-[0.5rem] text-[#586166] p-[12px] "
              />
            </label>
          </div>

          
        </div>

        {/* Declaimer */}

        <div className="p-6 ">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 font-montserrat">Disclaimer</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-600 font-montserrat font-semibold">
        <li>
          I accept to participate in the YAP with the conditions so arranged between the
          "YAP / Famex Austauschverein e.V." and the sponsoring national association.
        </li>
        <li>
          I shall make all arrangements such as return flight tickets.
        </li>
        <li>
          I waive my rights to make any claims against the YAP/Famex – Austauschverein e.V., 41 International, and the sponsoring Associations for misrepresentation and for damages of any nature that I might encounter during my participation in this program.
        </li>
        <li>
          I shall take an insurance policy before my departure and for the duration of the program to cover myself against sickness and accident. In addition, I shall take cover for civil liability for material or corporal damages incurred by myself.
        </li>
        <li>
          I shall not indulge in drugs or any illicit activities. I understand that this would result in immediate deportation.
        </li>
        <li>
          I understand that our family would be obligated to host inbound YAPs in the future.
        </li>
      </ul>
    </div>

    {/* checkmark */}

    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="terms"
        name="terms"
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        required
      />
      <label htmlFor="terms" className="text-gray-700 text-sm font-semibold font-montserrat">
        I agree to the 41 India Terms & Conditions
      </label>
    </div>


        <button
          type="submit"
          className="mt-6 rounded-full bg-[#124F92] py-[8px] px-[12px]  text-white font-montserrat font-bold w-[127px]"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
