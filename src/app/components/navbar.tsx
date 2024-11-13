import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
    return (
        <div className="w-full h-[92px] px-p[140px] py-4 bg-[#043873] flex flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="w-[191px] h-[34px] ml-12">
                <Image 
                    src={logo} 
                    alt="logo" 
                    width={150} 
                    height={80} 
                    className="transition-transform duration-300 hover:transform hover:scale-110">

                </Image>
            </div>

            {/* Navigation Links and Login Button */}
            <div className="w-[737.5px] h-[60px] flex justify-between items-center mr-12">
                <div className="w-[549px] h-[23px]">
                    <ul className=" text-[20px] font-bold flex flex-row justify-between text-white">
                        <li className="cursor-pointer hover:text-[#E6DB8A]">Products</li>
                        <li className="cursor-pointer hover:text-[#E6DB8A]">Solutions</li> 
                        <li className="cursor-pointer hover:text-[#E6DB8A]">Resources</li>
                        <li className="cursor-pointer hover:text-[#E6DB8A]">Pricing</li>
                    </ul>
                </div>

                {/* Login Button */}
                <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg  font-inter font-medium bg-[#FFE492] cursor-pointer hover:bg-[#E6DB8A]">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
