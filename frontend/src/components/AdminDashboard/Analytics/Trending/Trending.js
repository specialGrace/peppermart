import React from "react";
import Image from "next/image";
import productImg from "../../../../assets/images/72.png";

import styles from "./Trending.module.css";

const Trending = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.trendingProduct} mb-12 md:mr-12 `}>
        <p>Trending Product</p>
        <div className="w-full overflow-auto rounded-lg shadow">
          <table className="w-full my-6">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr className="">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Product Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Price
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Sold
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex">
                    <div className="w-10 h-10 mr-4">
                      <Image src={productImg} alt="product" />
                    </div>
                    <div>
                      <p>Luxury Watch</p>
                      <p>Black</p>
                    </div>
                  </div>
                </td>
                <td>₦300</td>
                <td>12.347pcs</td>
                <td>₦231.000</td>
              </tr>
              <tr className="bg-gray-200 hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex">
                    <div className="w-10 h-10 mr-4">
                      <Image src={productImg} alt="product" />
                    </div>
                    <div>
                      <p>Luxury Watch</p>
                      <p>Black</p>
                    </div>
                  </div>
                </td>
                <td>₦300</td>
                <td>12.347pcs</td>
                <td>₦231.000</td>
              </tr>
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex">
                    <div className="w-10 h-10 mr-4">
                      <Image src={productImg} alt="product" />
                    </div>
                    <div>
                      <p>Luxury Watch</p>
                      <p>Black</p>
                    </div>
                  </div>
                </td>
                <td>₦300</td>
                <td>12.347pcs</td>
                <td>₦231.000</td>
              </tr>
              <tr className="bg-gray-200 hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex">
                    <div className="w-10 h-10 mr-4">
                      <Image src={productImg} alt="product" />
                    </div>
                    <div>
                      <p>Luxury Watch</p>
                      <p>Black</p>
                    </div>
                  </div>
                </td>
                <td>₦300</td>
                <td>12.347pcs</td>
                <td>₦231.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${styles.trendingCategory}`}>
        <p>Trending Category</p>
        <div className="w-full overflow-auto rounded-lg shadow">
          <table className="w-full my-6">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Category Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Amount
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Accessories
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  60.323pcs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  ₦120.000
                </td>
              </tr>
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Accessories
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  60.323pcs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  ₦120.000
                </td>
              </tr>
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Accessories
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  60.323pcs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  ₦120.000
                </td>
              </tr>
              <tr className="bg-white hover:bg-blue-200 cursor-pointer">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Accessories
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  60.323pcs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  ₦120.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trending;
