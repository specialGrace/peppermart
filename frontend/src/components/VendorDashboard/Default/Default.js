import React from "react";
import Image from "next/image";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { AiFillPieChart, AiOutlineShoppingCart } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import DoughnutChat from "../../AdminDashboard/Analytics/DoughnutChat";
import BarChat from "../../AdminDashboard/Analytics/BarChat";
import Phone2 from "../../../assets/images/phone2.png";
import Phone3 from "../../../assets/images/phone3.png";

import styles from "./Default.module.css";

const Default = () => {
  const config = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const data = {
    labels: "", //["Jan", "Feb", "Mar", "Apr", "May"]
    datasets: [
      {
        label: "",
        data: [150, 350, 450],
        borderColor: "purple",
        backgroundColor: ["#737373", "#86efac", "#f97316"],
      },
    ],
  };

  const barChatData = {
    labels: [
      "Sep 10",
      "Sep 11",
      "Sep 12",
      "Sep 13",
      "Sep 14",
      "Sep 15",
      "Sep 16",
    ],
    datasets: [
      {
        label: "",
        data: [40, 20, 60, 140, 100, 120, 80],
        backgroundColor: ["#1F2B5B"],
        borderColor: ["rgb(201, 203, 207)"],
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };
  return (
    <div className="w-full drop-shadow-md rounded-xl mx-3 md:mx-0">
      <section className="w-full flex flex-col 2xl:flex-row justify-center ">
        {/* left col */}
        <div className="basis-full md:basis-3/5 flex flex-col items-center justify-center mr-[20px]">
          {/* top cards */}
          <div className="w-full flex flex-col md:flex-row my-3">
            <div className="basis-full sm:basis-1/2 md:max-w-[400px] min-h-[150px] bg-white drop-shadow-md rounded-xl mb-[12px] sm:mr-[12px] ">
              <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-center py-[12px] px-[10px]">
                  <div className="flex justify-center items-center w-[36px] h-[36px] rounded-lg bg-slate-300">
                    <AiFillPieChart className="text-[20px] text-peppermartDark80" />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                      This week
                    </span>
                    <BsChevronDown className="cursor-pointer" />{" "}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col px-[10px] mr-6">
                    <p className="text-peppermartDark30">Sales</p>
                    <p className="text-peppermartDark60 text-[20px]">
                      ₦4,000,000.00
                    </p>
                  </div>
                  <div className="flex flex-col  px-[10px]">
                    <p className="text-peppermartDark30">Volume</p>
                    <p className="flex items-center text-peppermartDark60 text-[20px]">
                      <span className="mr-[15px]">450</span>
                      <span className="text-green-300">+20.00%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-1/2 md:max-w-[400px]  min-h-[150px] bg-white drop-shadow-md rounded-xl">
              <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-center py-[12px] px-[10px]">
                  <div className="flex justify-center items-center w-[36px] h-[36px] rounded-lg bg-slate-300">
                    <FiUsers className="text-[20px] text-peppermartDark80" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                      This week
                    </span>
                    <BsChevronDown className="cursor-pointer" />{" "}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col px-[10px] mr-6">
                    <p className="text-peppermartDark30">Customers</p>
                    <p className="text-peppermartDark60 text-[20px]">1250</p>
                  </div>
                  <div className="flex flex-col  px-[10px]">
                    <p className="text-peppermartDark30">Active</p>
                    <p className="flex items-center text-peppermartDark60 text-[20px]">
                      <span className="mr-[15px]">1250</span>
                      <span className="text-green-300">+15.00%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mid section cards */}
          <div className="w-full flex flex-col md:flex-row  my-3">
            <div className="basis-full md:basis-1/2 md:max-w-[400px]  flex  mr-[12px] mb-6 md:mb-0">
              <div className="w-full h-full bg-white drop-shadow-md rounded-xl">
                <div className="h-full flex flex-col ">
                  <div className="flex justify-between items-center py-[12px] px-[10px]">
                    <p className="text-peppermartDark80 font-bold">Marketing</p>

                    <div className="flex justify-between items-center">
                      <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                        This week
                      </span>
                      <BsChevronDown className="cursor-pointer" />{" "}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full flex justify-between px-[10px] mr-6">
                      <p className="flex items-center text-peppermartDark30">
                        <span className="w-[10px] h-[10px] rounded-full bg-peppermartDark30 mr-[15px]"></span>
                        <span>Acquisition</span>
                      </p>
                      <p className="flex items-center text-peppermartDark30 ">
                        <span className="w-[10px] h-[10px] rounded-full bg-green-300 mr-[15px]"></span>
                        <span>Purchase</span>
                      </p>
                      <p className="flex items-center text-peppermartDark30 ">
                        <span className="w-[10px] h-[10px] rounded-full bg-orange-500 mr-[15px]"></span>
                        <span>Retention</span>
                      </p>
                    </div>

                    {/*  piechat*/}
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="w-[300px] h-[300px]">
                        <DoughnutChat data={data} options={config} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full md:basis-1/2 md:max-w-[400px]  flex flex-col">
              <div className=" h-[200px] bg-peppermartBlue300 drop-shadow-md rounded-xl mb-[12px]">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center py-[12px] px-[10px]">
                    <div className="flex justify-center items-center w-[36px] h-[36px] rounded-lg bg-slate-300">
                      <GoFileSubmodule className="text-[20px] text-peppermartDark80" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="mr-[10px] cursor-pointer text-white text-[14px]">
                        This week
                      </span>
                      <BsChevronDown className="cursor-pointer text-white" />{" "}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col px-[10px] mr-6">
                      <p className="text-white">All Products</p>
                      <p className="text-white text-[20px]">450</p>
                    </div>
                    <div className="flex flex-col  px-[10px]">
                      <p className="text-white">Active</p>
                      <p className="flex items-center text-white text-[20px]">
                        <span className="mr-[15px]">32</span>
                        <span className="text-green-300">+20.00%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[200px] bg-white drop-shadow-md rounded-xl">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center py-[12px] px-[10px]">
                    <div className="flex justify-center items-center w-[36px] h-[36px] rounded-lg bg-slate-300">
                      <AiOutlineShoppingCart className="text-[20px] text-peppermartDark80" />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                        This week
                      </span>
                      <BsChevronDown className="cursor-pointer" />{" "}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col px-[10px] mr-6">
                      <p className="text-peppermartRed200">Abandoned Cart</p>
                      <p className="text-peppermartDark60 text-[20px]">450</p>
                    </div>
                    <div className="flex flex-col  px-[10px]">
                      <p className="text-peppermartDark30">Customers</p>
                      <p className="flex items-center text-peppermartDark60 text-[20px]">
                        <span className="mr-[15px]">450</span>
                        <span className="text-green-300">+20.00%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* botto section card */}
          <div className="w-full flex my-3">
            <div className="w-full md:max-w-[800px]  flex flex-col min-h-[450px] bg-white drop-shadow-md rounded-xl">
              <div className="flex justify-between items-center py-[12px] px-[10px]">
                <div className="flex items-center">
                  <p className="text-peppermartDark80 font-bold mr-[12px]">
                    Summary
                  </p>
                  <div className="max-w-fit flex items-center bg-slate-200 py-3 px-6 rounded-lg">
                    <span className="">Sales</span> <BsChevronDown />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                    Last Seven Days
                  </span>
                  <BsChevronDown className="cursor-pointer" />{" "}
                </div>
              </div>

              {/* Bar Chat */}
              <div className="w-full p-3">
                <BarChat data={barChatData} />
              </div>
            </div>
          </div>
        </div>

        {/* right col */}
        <div className="md:max-w-[450px] flex flex-col my-3">
          <div className=" min-h-[150px]  bg-white drop-shadow-md rounded-xl">
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-center py-[12px] px-[10px]">
                <div className="flex justify-center items-center w-[36px] h-[36px] rounded-lg bg-slate-300">
                  <HiOutlineShoppingBag className="text-[20px] text-peppermartDark80" />
                </div>

                <div className="flex justify-between items-center">
                  <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                    This week
                  </span>
                  <BsChevronDown className="cursor-pointer" />{" "}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-[10px]">
                  <p className="text-peppermartDark30">All Orders</p>
                  <p className="text-peppermartDark30">Pending</p>
                  <p className="text-peppermartDark30">Completed</p>
                </div>
                <div className="flex justify-between items-center px-[10px]">
                  <p className="text-peppermartDark60 text-[20px]">450</p>
                  <p className="text-peppermartDark60 text-[20px]">5</p>
                  <p className="text-peppermartDark60 text-[20px]">320</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full bg-white drop-shadow-md rounded-xl my-6">
            <div className=" p-3 ">
              <p>Recent Orders</p>
              {/* recent orders */}
              <div>
                <div className="flex  my-3">
                  <div className="w-[49px] h-[49px] rounded-[8px]">
                    <Image
                      src={Phone2}
                      alt="profile"
                      width={49}
                      height={49}
                      // layout="fill"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="basis-full flex flex-col justify-between">
                    <div className="basis-full flex justify-between items-center">
                      <span className="text-peppermertDark80">iPhone 13</span>
                      <span className="text-peppermertDark40">
                        12 Sept 2022
                      </span>
                    </div>
                    <div className="basis-full flex justify-between items-center">
                      <span>₦730,000.00 x 1</span>
                      <span className="max-w-fit p-2 bg-emerald-100 rounded-xl">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex  my-3">
                  <div className="w-[49px] h-[49px] rounded-[8px]">
                    <Image
                      src={Phone2}
                      alt="profile"
                      width={49}
                      height={49}
                      // layout="fill"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="basis-full flex flex-col justify-between">
                    <div className="basis-full flex justify-between items-center">
                      <span className="text-peppermertDark80">iPhone 13</span>
                      <span className="text-peppermertDark40">
                        12 Sept 2022
                      </span>
                    </div>
                    <div className="basis-full flex justify-between items-center">
                      <span>₦730,000.00 x 1</span>
                      <span className="max-w-fit p-2 bg-emerald-100 rounded-xl">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex  my-3">
                  <div className="w-[49px] h-[49px] rounded-[8px]">
                    <Image src={Phone2} alt="profile" width={49} height={49} />
                  </div>
                  <div className="basis-full flex flex-col justify-between">
                    <div className="basis-full flex justify-between items-center">
                      <span className="text-peppermertDark80">iPhone 13</span>
                      <span className="text-peppermertDark40">
                        12 Sept 2022
                      </span>
                    </div>
                    <div className="basis-full flex justify-between items-center">
                      <span>₦730,000.00 x 1</span>
                      <span className="max-w-fit p-2 bg-emerald-100 rounded-xl">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex my-3">
                  <div className="w-[49px] h-[49px] rounded-[8px]">
                    <Image
                      src={Phone2}
                      alt="profile"
                      width={49}
                      height={49}
                      // layout="fill"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="basis-full flex flex-col justify-between">
                    <div className="basis-full flex justify-between items-center">
                      <span className="text-peppermertDark80">iPhone 13</span>
                      <span className="text-peppermertDark40">
                        12 Sept 2022
                      </span>
                    </div>
                    <div className="basis-full flex justify-between items-center">
                      <span>₦730,000.00 x 1</span>
                      <span className="max-w-fit p-2 bg-emerald-100 rounded-xl">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex my-3">
                  <div className="w-[49px] h-[49px] rounded-[8px]">
                    <Image
                      src={Phone2}
                      alt="profile"
                      width={49}
                      height={49}
                      // layout="fill"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="basis-full flex flex-col justify-between">
                    <div className="basis-full flex justify-between items-center">
                      <span className="text-peppermertDark80">iPhone 13</span>
                      <span className="text-peppermertDark40">
                        12 Sept 2022
                      </span>
                    </div>
                    <div className="basis-full flex justify-between items-center">
                      <span>₦730,000.00 x 1</span>
                      <span className="max-w-fit p-2 bg-emerald-100 rounded-xl">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Default;
