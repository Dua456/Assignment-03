import React from "react"; 
import Image from "next/image";
import Image01 from "@/app/assets/image01.png";
import image02 from "@/app/assets/image02.png";

const Hero = () => {
    return (
      <>
        <div className="pt-[140px] pl-[220px] top-[92px] bg-[#043873] text-white flex justify-center items-center">
            <div className="w-[656px] h-[361px]">
                <div className="w-[656px] h-[238px]">
                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[0.02em] mb-6">Get More Done with whitespace</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[0.02em] gap-6">Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks</p>
                </div>
                <br />
                <br />
                <button className="px-6 py-3 rounded-lg bg-[#4F9cF9] text-[#ffffff] font-semibold gap-6 cursor-pointer hover:bg-[#3e86c3]">
                    Try Whitespace Free
                </button>
            </div>
            <div className="w-[700px] h-[549px] ">
                <Image src={Image01} alt="image"  className="transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
            
        </div> 

        <div className="pt-[140px] pl-[220px] bg-[#ffffff] text-[#212529] flex justify-center items-center">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="w-[672px] text-center lg:text-left">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-6">
                    Project Management
                    </h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[0.02em] mb-6">
                    Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="px-6 py-3 rounded-lg bg-[#4F9cF9] text-white font-medium cursor-pointer hover:bg-[#3e86c3]">
                    Get Started
                    </button>
                </div>
                <div className="w-[824px] h-[549px] flex justify-center">
                <Image src={Image01} alt="image"  className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
            </div>
        </div>



        <div className=" pt-[140px] pl-[220px] bg-[#fffff] text-[#212529] flex justify-center items-center">
            <div className="w-full h-[661px] gap-[100px] flex justify-center items-center">
                <div className="w-[550px] h-[500px] ">
                    <Image src={image02} alt="image"  className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="w-[670px] h-[294x]">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-6">Work together</h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[0.02em] gap-6">
                        With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                
                    <br />
                    <br />
                    <button className="px-6 py-3 rounded-lg bg-[#4F9cF9] text-[#ffffff] font-semibold gap-6 cursor-pointer hover:bg-[#3e86c3]">
                    Try it now
                    </button>    
                </div>
            </div>
        </div>
           
        
      </>          
    );
}



export default Hero;
