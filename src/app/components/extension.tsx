import Image from "next/image";
import Image01 from "@/app/assets/image01.png";

const Extension = () => {
    return (
        <>
            <div className="pt-[140px] pl-[220px] h-[759px] bg-[#043873] text-white flex justify-center items-center gap-10">
                <div className="w-[697px] h-[294px] space-y-6">
                    <div className="w-[697px] h-[171px]">
                        <h2 className="font-bold text-[72px] leading-[77.45px] tracking-[0.02em] mb-4">Use as Extension</h2>
                        <p className="font-normal text-lg leading-[30px] tracking-[0.02em] mt-4">
                            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>
                        
                        <button className="w-[150px] h-[50px] bg-[#4F9cF9] rounded-lg p-4 mt-6">
                            <p className="text-white font-medium text-lg leading-[15px] tracking-[-0.02em] ml-4 flex ">
                                Let’s Go
                            </p>
                        </button>
                    </div>
                </div>
                
                <div className="w-[600px] h-[549px] flex justify-center items-center">
                    <Image src={Image01} alt="image"  className="transition-transform duration-300 ease-in-out hover:scale-110"/>
                </div>
            </div>
        </>
    );
}

export default Extension;
