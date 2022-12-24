import React from "react";
import CardBox from "../../CardBox/CardBox";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import LineChat from "./LineChat";
import BarChat from "./BarChat";
import Trending from "./Trending/Trending";

import styles from "./Analytics.module.css";

const Analytics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [30, 59, 80, 89, 100, 150, 200],
        fill: false,
        borderColor: "var(--peppermart--dark500)",
        tension: 0.1,
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
  //data.map((item)=> item.year)

  return (
    <div className="w-full h-full">
      <section className="w-full">
        <div className="w-full flex flex-wrap mx-3">
          <div className="min-w-[450px] min-h-[200px] flex bg-white drop-shodow-md rounded-xl my-3 p-4 md:mr-3">
            <div className="basis-2/5 flex flex-col justify-center items-center leading-8">
              <p className="text-peppermartDark60">Revenue</p>
              <p className="text-peppermartBlue200 text-[27px]">₦900</p>
              <div className="flex">
                <AiFillCaretUp className="text-peppermartBlue200" />{" "}
                <span className="text-peppermartBlue200">12% This Week</span>
              </div>
            </div>
            <div className="basis-3/5">
              <div className="">
                <LineChat data={data} options={{ responsive: true }} />
              </div>
            </div>
          </div>

          <div className="min-w-[450px] min-h-[200px] flex bg-white drop-shodow-md rounded-xl my-3 p-4 md:mr-3">
            <div className="basis-2/5 flex flex-col justify-center items-center leading-8">
              <p className="text-peppermartDark60">Visitor</p>
              <p className="text-peppermartBlue200 text-[27px]">₦900</p>
              <div className="flex">
                <AiFillCaretUp className="text-peppermartBlue200" />{" "}
                <span className="text-peppermartBlue200">12% This Week</span>
              </div>
            </div>
            <div className="basis-3/5">
              <div className="">
                <LineChat data={data} options={{ responsive: true }} />
              </div>
            </div>
          </div>

          <div className="min-w-[450px] min-h-[200px] flex bg-white drop-shodow-md rounded-xl my-3 p-4 md:mr-3">
            <div className="basis-2/5 flex flex-col justify-center items-center leading-8">
              <p className="text-peppermartDark60">Sales</p>
              <p className="text-peppermartBlue200 text-[27px]">₦900</p>
              <div className="flex">
                <AiFillCaretUp className="text-peppermartBlue200" />{" "}
                <span className="text-peppermartBlue200">12% This Week</span>
              </div>
            </div>
            <div className="basis-3/5">
              <div className="">
                <LineChat data={data} options={{ responsive: true }} />
              </div>
            </div>
          </div>

          <div className="min-w-[450px] min-h-[200px] flex bg-white drop-shodow-md rounded-xl my-3 p-4 md:mr-3">
            <div className="basis-2/5 flex flex-col justify-center items-center leading-8">
              <p className="text-peppermartDark60">Profit</p>
              <p className="text-peppermartBlue200 text-[27px]">₦900</p>
              <div className="flex">
                <AiFillCaretUp className="text-peppermartBlue200" />{" "}
                <span className="text-peppermartBlue200">12% This Week</span>
              </div>
            </div>
            <div className="basis-3/5">
              <div className="">
                <LineChat data={data} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[350px] bg-white drop-shadow-md rounded-lg p-3">
          <h4 className="">Graph for each category</h4>
          <div className="max-w-fit p-3">
            <BarChat data={barChatData} />
          </div>
        </div>
      </section>

      <section className={styles.trending}>
        <Trending />
      </section>
    </div>
  );
};

export default Analytics;
