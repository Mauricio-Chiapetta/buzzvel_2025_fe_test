import Image from "next/image";
import logo from "@/assets/images/Logo-colored.png";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

export function Navbar() {
  return (
    <div className="bg-white">
      <div className="px-[16px] sm:px-[80px]">
        <div className="py-[24px] flex items-center justify-between">
          <div className="flex items-center gap-[48px]">
            <Image src={logo} alt="Logo" className="w-[103px] h-[35px]" />
            <nav className=" hidden sm:flex gap-[48px]">
              <Link href={"#"} className="text-blue font-medium">
                Products
              </Link>
              <Link href={"#"} className="text-blue font-medium">
                Solutions
              </Link>
              <Link href={"#"} className="text-blue font-medium">
                Pricing
              </Link>
              <Link
                href={"#"}
                className="text-blue font-medium flex items-center gap-2"
              >
                Resources
                <ChevronDown size={20} />
              </Link>
            </nav>
          </div>
          <div className="hidden sm:flex items-center gap-[16px]">
            <Link href={"#"} className="text-blue font-medium">
              Log In
            </Link>
            <Link
              href={"#"}
              className="border-[2px] text-blue font-medium py-2 px-4 border-blue rounded-[8px] hover:bg-blue hover:text-white transition-colors duration-300"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="sm:hidden flex">
            <Menu className="text-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
