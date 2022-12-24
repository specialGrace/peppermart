import React from "react";
import Image from "next/image";
import profile from "../../../assets/images/unsplash_2EGNqazbAMk.png";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const Settings = () => {
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

      <section className="w-full my-6 min-h-[644px] bg-white drop-shodow-md rounded-xl p-12">
        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>

        <div className="flex items-center mb-6 cursor-pointer">
          <div className="w-[80px] h-[34px] rounded-xl  mr-6 bg-peppermartYellow120">
            <div className="w-[30px] h-[34px] rounded-full bg-peppermartOrange "></div>
          </div>
          <p className="text-[18px] text-Urbanist">
            Receive notification about customer’s compliant
          </p>
        </div>
      </section>
    </div>
  );
};

export default Settings;
