import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Footer = () => {
    return (
        <>
            <div className="py-[100px] px-[120px] bg-[#043873] text-white grid grid-cols-4 gap-x-10">
                <div className="w-[191px] h-[189px] gap-[15px]">
                    <Image src={logo} alt="logo" />
                    <p className="w-[240px] h-[120px] text-justify font-normal text-lg leading-[30px] tracking-[-0.02em]">
                        Whitepace was created for <br /> the new ways we live and <br /> work. We make a better<br />  workspace around the world.
                    </p>
                </div>
                
                {/* Product section */}
                <div className="w-[295px] h-[127px] my-1 ml-24">
                    <h1 className="w-[60px] h-[22px] font-bold leading-[21.78px] tracking-[-0.02em]">Product</h1>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Overview</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Pricing</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Customer stories</p>
                </div>

                {/* Resources section */}
                <div className="w-[295px] h-[127px] my-1 ml-20">
                    <h1 className="w-[60px] h-[22px] font-bold leading-[21.78px] tracking-[-0.02em]">Resources</h1>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Blog</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Guide and tutorials</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Help center</p>
                </div>

                {/* Company section */}
                <div className="w-[295px] h-[127px] my-1 ml-10">
                    <h1 className="w-[60px] h-[22px] font-bold leading-[21.78px] tracking-[-0.02em]">Company</h1>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">About us</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Careers</p>
                    <p className="text-[#FFFFFF] text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">Media kit</p>
                </div>

                {/* Footer copyright */}
                <div className="col-span-4 mt-16">
                    <p className="text-center text-base font-normal leading-[20px]">
                        © 2021 Whitepace LLC.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
