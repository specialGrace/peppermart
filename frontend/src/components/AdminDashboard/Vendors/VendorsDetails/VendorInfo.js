import React from "react";
import Card2_5 from "./Card2_5";
import Card1_5 from "./Card1_5";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsChevronDown, BsCreditCard2Back } from "react-icons/bs";

const VendorInfo = () => {
    return (
        <div className="w-full flex justify-between items-center my-3 flex-wrap md:flex-wrap">
            <Card2_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <FaUser className="text-[20px]" />
                            </div>

                            <div>
                                <p className="text-Inter text-peppermartDark30 text-[14px]">
                                    Janet Adebayo
                                </p>
                                <p className="text-Inter text-peppermartDark30 text-[14px]">
                                    Customer since{" "}
                                    <span className="text-Inter text-peppermartDark60 text-[14px]">
                                        12 Sept 2022
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between py-1 px-3 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
                            Pending
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">Phone</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px]">
                                    +2348065650633
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30">Email</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px]">
                                    janet.adebayo@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card2_5>
            <Card2_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <MdOutlineLocationOn className="text-[20px]" />
                            </div>

                            <div>

                            </div>
                        </div>

                        {/* <div className="flex justify-between py-3 px-6 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
              Pending
            </div> */}
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">
                                    Home Address
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                                    No. 15 Adekunle Street, Yaba, Lagos State
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">
                                    Billing Address
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                                    No. 15 Adekunle Street, Yaba, Lagos State
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card2_5>
            <Card1_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <BsCreditCard2Back className="text-[20px]" />
                            </div>
                        </div>
                        <div className="flex justify-between py-1 px-3 items-center text-peppermartDark60 text-[14px]">
                            <span>All time</span>
                            <select>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">
                                    Total Orders
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark600 text-[20px] text-[16px]">
                                    #250,000
                                </p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </Card1_5>
            <Card2_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <HiOutlineShoppingBag className="text-[20px]" />
                            </div>

                            <div>

                            </div>
                        </div>

                        <div className="flex justify-between py-1 px-3 items-center text-peppermartDark60 text-[14px]">
                            <span>All time</span>
                            <select>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">All Orders</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    10
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30">Pending</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    3
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30">Completed</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card2_5>
            <Card2_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <HiOutlineShoppingBag className="text-[20px]" />
                            </div>

                            <div>

                            </div>
                        </div>

                        <div className="flex justify-between py-1 px-3 items-center text-peppermartDark60 text-[14px]">
                            <span>All time</span>
                            <select>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30 text-[14px]">Cancelled</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    0
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30">Returned</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    3
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark30">Damaged</p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark60 text-[14px] font-bold">
                                    2
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card2_5>
            <Card1_5>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center py-[12px] px-[10px]">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-peppermartYellow100 rounded-xl p-2 mr-2 flex justify-center items-center">
                                <HiOutlineShoppingCart className="text-[20px]" />
                            </div>
                        </div>

                        {/* <div className="flex justify-between py-3 px-6 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
              Pending
            </div> */}
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartRed200 text-[14px]">
                                    Abandoned Cart
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-[10px]">
                                <p className="text-peppermartDark600 text-[20px] text-[16px]">
                                    2
                                </p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </Card1_5>
        </div>
    );
};

export default VendorInfo;
