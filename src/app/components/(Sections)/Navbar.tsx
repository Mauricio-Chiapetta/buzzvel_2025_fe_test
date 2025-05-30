import Image from "next/image";
import logo from "@/app/assets/images/Logo.png";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white sm:px-[80px] px-[16px]">
      <div>
        <div className="py-[24px] flex items-center justify-between">
          <div className="flex items-center gap-[48px]">
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="w-[103px] h-[35px]" />
            </Link>
            <nav className=" hidden sm:flex gap-[48px]">
              <Link href={"#"} className="text-grayBlue font-medium">
                Products
              </Link>
              <Link href={"#"} className="text-grayBlue font-medium">
                Solutions
              </Link>
              <Link href={"#"} className="text-grayBlue font-medium">
                Pricing
              </Link>
              <Link
                href={"#"}
                className="text-grayBlue font-medium flex items-center gap-2"
              >
                Resources
                <ChevronDown size={20} />
              </Link>
            </nav>
          </div>
          <div className="hidden sm:flex items-center gap-[16px]">
            <Link href={"#"} className="text-grayBlue font-medium">
              Log In
            </Link>
            <Link
              href={"#"}
              className="border-[2px] text-grayBlue font-medium py-2 px-4 border-grayBlue rounded-[8px] hover:bg-grayBlue hover:text-white transition-colors duration-300"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="sm:hidden flex">
            <Menu className="text-grayBlue" />
          </div>
        </div>
      </div>
    </nav>
  );
}
