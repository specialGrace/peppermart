import React from "react";
import { FaPlus, FaSearch, FaPaperPlane } from "react-icons/fa";
import { BsChevronDown, BsFunnel, BsFilterSquare } from "react-icons/bs";
import { MdOutlineFileCopy } from 'react-icons/md'
import { CgSortAz } from "react-icons/cg";
import CardCol3X1 from "./CardCol_3_X_1";
import Link from "next/link";

const Vendors = () => {

    return (
        <div>

            <section className="w-full">
                <div className="w-full flex flex-col md:flex-row justify-between mx-6 md:mx-0">
                    {/* new order  */}
                    <p className="font-Inter text-peppermartDark300 text-lg">
                        Vendor Summary
                    </p>
                    <Link href="/vendor/vendor/createvendor">
                        <button
                            className="flex justify-center items-center w-[200px] py-[5px] px-[4px] bg-peppermartDark500 text-white"

                        >
                            <FaPlus className="text-white mr-3" />{" "}
                            <span className="text-white font-Inter">Add new Vendor</span>
                        </button>
                    </Link>
                </div>

                {/* summaries */}
                <CardCol3X1 />

                <div className="w-full h-auto bg-white drop-shadow-md rounded-xl p-5 mx-6 md:mx-0">
                    {/* header table */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="font-Inter mb-6 md:mb-0 text-peppermartDark300 text-lg">
                            Vendors
                        </p>
                        <div className="flex flex flex-col md:flex-row justify-between items-center p-3">
                            <div className="flex justify-between items-center border border-peppermartDark15 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                                <FaSearch className="mr-2" />
                                <input type="text" placeholder="Search" className="outline-0" />
                            </div>

                            <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer md:w-[100px] sm:w-[100px] w-full">
                                <BsFunnel className="mr-2" />
                                <p>Funnel</p>
                            </div>
                            <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer md:w-[100px] sm:w-[100px] w-full">
                                <BsFilterSquare className="mr-2" />
                                <p>Filter</p>
                            </div>
                            <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer md:w-[100px] sm:w-[100px] w-full">
                                <FaPaperPlane className="mr-2" />
                                <p>Export</p>
                            </div>
                            <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer md:w-[120px] sm:w-[120px] w-full">
                                <BsChevronDown className="mr-2" />
                                <p>Bulk Action</p>
                            </div>
                        </div>
                    </div>

                    {/* table */}

                    <div className="my-12  overflow-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-t-2 border-gray-200">
                                <tr>
                                    <th className="py-4 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Vendor Name</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Email</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Phone</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Order</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Order Total</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Vendor Since</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                    <th className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span>Status</span> <CgSortAz />{" "}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-200">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <input type='checkbox' className="w-[20px] h-[20px] border border-gray-200  bg-white" />
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Nedum & Son
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">nedum@gmail</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>
                                    <td className="py-6 tracking-wide text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="mr-2">+2347085474178</span> <MdOutlineFileCopy />{" "}
                                        </div>
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        ₦25,000.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        12 Aug 2022 - 12:25 am
                                    </td>

                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                                            <span className="mr-1">Completed</span>{" "}
                                        </div>
                                    </td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vendors;



