import logo from "@/app/assets/images/Logo-colored.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Euro } from "lucide-react";
import { FaUniversalAccess } from "react-icons/fa6";
export function Footer() {
  return (
    <footer className="bg-grayBlue text-white lg:px-20 px-4 flex flex-col">
      <section className="flex lg:gap-12 flex-col lg:flex-row gap-0">
        <div className="lg:py-12 py-8">
          <Image src={logo} alt="logo" />
        </div>
        <div className="lg:py-12 py-8 flex lg:items-center items-start lg:gap-20 gap-8 flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <Link href={"#"} className="font-semibold">
              Product
            </Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Browse</Link>
            <Link href={"#"} className="flex gap-1 items-center">
              Acessibility
              <span className="text-xs font-semibold text-center rounded-sm bg-purple-100 text-purple p-1">
                BETA
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={"#"} className="font-semibold">
              Solutions
            </Link>
            <Link href={"#"}>Brainstorming</Link>
            <Link href={"#"}>Ideation</Link>
            <Link href={"#"}>Wireframing</Link>
            <Link href={"#"}>Research</Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={"#"} className="font-semibold">
              Resources
            </Link>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>FAQs</Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={"#"} className="font-semibold">
              Support
            </Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Developers</Link>
            <Link href={"#"}>Documentation</Link>
            <Link href={"#"}>Integrations</Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={"#"} className="font-semibold">
              Company
            </Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Events</Link>
            <Link href={"#"} className="flex items-center gap-3">
              Request Demo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="py-6 border-t-1 border-gray">
        <div className="flex lg:items-center justify-between flex-col lg:flex-row lg:gap-0 gap-6">
          <p>uteach &copy; 2023. All rights reserved.</p>
          <div className="flex lg:gap-8 gap-8">
            <Link href={"#"}>
              <p>Terms</p>
            </Link>
            <Link href={"#"}>
              <p>Privacy</p>
            </Link>
            <Link href={"#"} className="lg:block hidden">
              <p>Contact</p>
            </Link>
            <Link href={"#"}>
              <span className="flex items-center gap-2">
                <Globe size={20} />
                EN
              </span>
            </Link>
            <Link href={"#"}>
              <span className="flex items-center gap-2">
                <Euro size={20} />
                EUR
              </span>
            </Link>
            <Link href={"#"}>
              <FaUniversalAccess size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
