import Image from "next/image"
import image01 from "@/app/assets/image01.png"

const Customise = () => {
    return(
        <>
            <div className=" px-[100px] py-[70px] top-[921px] bg-[#fffff] text-[#212529] flex justify-center items-center">
                <div className="w-[700px] h-[500px] ">
                        <Image src={image01} alt="image"  className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="w-[670px] h-[294x] mt-14 ">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] ml-14">Customise it to <br /> your needs</h2>
                    <p className="font-normal text-[18px] leading-[30px] tracking-[-0.02em] gap-6 ml-14">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                
                    <br />
                    <button className="w-[150px] h-[60px] bg-[#4F9cF9] rounded-lg p-4 mt-11 mx-9">
                        <p className="text-white font-medium text-lg leading-[15px] tracking-[-0.02em] ml-2">
                        Let’s Go                     
                        </p>
                    </button>

                </div>
            </div>
    

        </>
    )
}

export default Customise;