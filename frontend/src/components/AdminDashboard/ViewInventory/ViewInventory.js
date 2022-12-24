import React from "react";
import ShirtCard from "./shirtCard";
import ViewCards from "./Cards";
import ViewInventoryCards from "./ViewInventoryCards";
import { CiClock2 } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
const ViewInventory = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center py-4 ">
        <div>
          <ShirtCard />
        </div>
        <div className="flex justify-center items-center">
          <ViewInventoryCards
            icon1="Last Order 12/11/22"
            week="Published"
            title="Price"
            amount="250,000.00"
            Volume="In-stock"
            price="20"
            padding=""
            percent=""
            width=""
          />
        </div>
        <div>
          <ViewCards
            views=""
            orders="Total Orders"
            sum="50,000"
            clock={<CiClock2 />}
            arrowDown={<FiChevronDown />}
          />
        </div>
        <div>
          <ViewCards
            views="Favourite"
            orders="Views"
            sum="1200"
            clock={<AiOutlineEye />}
            amount="23"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewInventory;
