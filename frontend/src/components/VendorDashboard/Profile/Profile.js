import React from "react";
import Image from "next/image";
import profile from "../../../assets/images/unsplash_2EGNqazbAMk.png";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container py-6">
      <div className="container h-[320px] mx-2 md:mx-0 drop-shadow-md rounded-xl overflow-hidden relative">
        <div className="h-[200px] bg-peppermartBlue300"></div>
        <div className="h-[120px] bg-white"></div>
        <div className="w-[150px] h-[150px]  md:w-[200px] md:h-[200px] absolute bottom-12 md:bottom-6 left-12  md:left-6 rounded-full overflow-hidden">
          <Image src={profile} alt="profile" width={200} height={200} />
        </div>
        <div className="absolute bottom-16 left-[220px] md:left-[250px]">
          <p className="text-Urbanist text-white text-semibold text-[24px]">
            Nedum Onuoha
          </p>
          <div className="flex items-center">
            <MdOutlineLocationOn className="mr-1" />
            <span className="text-Urbanist  text-semibold text-[12px]">
              Lagos, Nigeria
            </span>
          </div>
          <div className="flex items-center">
            <MdOutlinePhone className="mr-1" />
            <span className="text-Urbanist  text-semibold text-[12px]">
              07030000000
            </span>
          </div>
          <div className="flex items-center">
            <FaRegEnvelope className="mr-1" />
            <span className="text-Urbanist  text-semibold text-[12px]">
              nedumonuoha@gmail.com
            </span>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-6 h-auto bg-white drop-shodow-md rounded-xl p-12">
        <form action="">
          <div className="w-full flex-col items-center">
            <div className="w-full flex flex-col md:flex-row items-center">
              <div className="basis-full md:basis-1/2 flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="firstName"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>

              <div className=" basis-1/2 flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="firstName"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className=" basis-1/2 flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="lasttName"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="lasttName"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>

              <div className=" basis-1/2 flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="lasttName"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="lasttName"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className=" basis-1/2 flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="state"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>

              <div className=" basis-1/2 flex items-center  mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="state"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  Home Address
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full py-3 px-6 focus:outline-0"
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="basis-full flex items-center mr-12 border border-slate-300 relative rounded-sm mb-[20px] ">
                <label
                  htmlFor="about"
                  className="absolute -top-[12px] left-[24px] px-2 z-10 bg-white font-bold"
                >
                  About
                </label>
                <textarea
                  type="text"
                  id="about"
                  className="w-full py-3 px-6 focus:outline-0"
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-center md:justify-start mt-6">
            <button className="w-[200px] py-6 px-12 text-white bg-peppermartBlue300 rounded-xl hover:opacity-60">
              SAVE
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
