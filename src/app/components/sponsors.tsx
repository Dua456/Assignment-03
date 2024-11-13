import Image from "next/image"
import Apple from "@/app/assets/Apple.png"
import Microsoft from "@/app/assets/Microsoft.png"
import Slack from "@/app/assets/Slack.png"
import Google from "@/app/assets/Google.png"


const Sponcer = () => {
    return(
        <>
          <div className="pt-[140px] pl-[220px] hight-[538px] top-[4654px] bg-[#FFFFFF] text-[#212529] flex justify-center items-center">
            <div className="w-[1481] h-[294px] gap-[60px]">
                <div className="w-[1064px] h-[87px]">
                    <h2 className="h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-6 flex justify-center items-center ">Our sponsors </h2>
                </div>
                <br />
                <br />
                <br />
                <div className="flex justify-between items-center gap-x-12">
                    <Image 
                        src={Apple} 
                        alt="Apple logo" 
                        className="w-[55px] h-[57px] hover:transform hover:translate-x-3 transition duration-300"
                    ></Image>
                    
                    <Image 
                        src={Microsoft} 
                        alt="Microsoft logo" 
                        className="w-[287px] h-[62px] hover:transform hover:translate-x-3 transition duration-300"
                    ></Image>

                    <Image 
                        src={Slack} 
                        alt="Slack logo" 
                        className="w-[250px] h-[59px] hover:transform hover:translate-x-3 transition duration-300"
                    ></Image>

                    <Image 
                        src={Google} 
                        alt="Google logo" 
                        className="w-[211px] h-[58px] hover:transform hover:translate-x-3 transition duration-300"
                    ></Image>
                </div>
            </div>
            
          </div>      

        </>
    )
}
export default Sponcer;