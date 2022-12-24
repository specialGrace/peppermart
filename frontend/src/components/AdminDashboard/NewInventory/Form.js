import React from "react";
import Description from "./Description";
import ProductDescription from "./ProductDescription";
import profile from '../../../assets/images/profile1.png'
import Image from "next/image"
import {AiOutlineCloudUpload} from "react-icons/ai"

const Form = () => {
  return (
    <div className="lg:grid lg:grid-cols-6 py-4 w-full rounded shadow bg-white mt-2">
      <div className="grid grid-cols-2 col-span-4 bg-white  w-full ">
        <div className="col-span-1  p-4">
          <div className="">
            <input
              type="text"
              placeholder="Product Name"
              className="rounded shadow bg-gray-50 py-2 px-4 w-full text-gray-500"
            />
          </div>
          <div className="mt-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-500  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Product Name</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Selling Price"
                className="rounded shadow bg-gray-50 py-2 px-4 w-full "
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Cost Price"
                className="rounded shadow bg-gray-50 py-2 px-4 w-full "
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="number"
              placeholder="Quantity in stock"
              className="rounded shadow bg-gray-50 py-2 px-4 w-full "
            />
          </div>
          <div className="mt-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option className="text-gray-500">Order Type</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="mt-4 flex justify-between items center">
            <div className="">
              <h3 className="text-xs text-gray-500">Discount</h3>
            </div>
            <div className="flex justify-between items center">
            <span className="mr-3 text-xs font-medium text-gray-500 dark:text-gray-300 text-gray-500">
                Add Discount
              </span>
            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer text-gray-500"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="">
              <h3 className="text-xs text-gray-500">Expiry Date</h3>
            </div>

            <div className="flex justify-between items center">
            <span className="mr-3 text-xs text-gray-500 font-medium text-gray-900 dark:text-gray-300">
                Add Expiry Date
              </span>
            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center ">
            <Description/>
            <div className="mt-2">
            <h3 className="ml-4 text-sm text-gray-500">Product Description</h3>
            <ProductDescription/>
            </div>
        </div>
      </div>
      <div className="col-span-2 bg-white w-full border-2 rounded-sm shadow">
        <div className="mt-4 h-1/2  ">
            <div className="flex flex-col justify-center items-center">
            <div className="w-72 h-44 bg-gray-200 rounded flex flex-col justify-center items-center mt-2 border-gray">
                <div className='border-2 bg-gray-300 rounded shadow m-0 border-2 border-gray'><Image src={profile} alt="profile" width={40} height={40}/></div>
                <div className=" bg-gray-200 rounded flex justify-center items-center  border-2"><AiOutlineCloudUpload/><h3 className="text-xs text-gray-50">Upload Image</h3></div>
                <h3 className="text-xs text-gray-500  border-2 border-gray">Upload a cover image for your product</h3>
                <h3 className="text-xs text-gray-500 border-2 border-gray">file format jpeg,png,Recommended size 600 * 600</h3>
            </div>
            </div>
            <div className="flex  justify-center items-center mt-8">
            <div className="w-32 h-32 bg-gray-300 rounded mr-4 flex flex-col justify-center items-center ">
            <div className='border-2 bg-gray-300 rounded mt-6 m-auto'>
            <Image src={profile} alt="profile" width={40} height={40}/>
            </div>  
            <div className="mt-0 bg-gray-300 rounded flex justify-center items-center ">
            <AiOutlineCloudUpload/><h3 className="text-xs text-gray-500">Upload Image</h3>
            </div>
            </div>
            <div className="w-32 border-2  border-gray-600 border-dashed h-32 bg-white rounded "></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
