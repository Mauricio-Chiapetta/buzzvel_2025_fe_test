import { Button } from "../Button";
import Image from "next/image";
export function Join() {
    return (
        <section className="bg-yellow flex justify-center lg:px-20 px-4 lg:py-64 py-[243.17px]">
            <div className="lg:w-7xl w-[361px] flex flex-col items-center justify-center gap-8">
                <h1 className="text-grayBlue font-bold leading-[110%] lg:text-[56px] text-2xl text-center">
                    Join a world of learning
                </h1>
                <p className="text-grayBlue lg:text-[20px] leading-[180%] text-center text-[16px]">
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    <br />
                    Risus elit et fringilla habitant ut facilisi.
                </p>              
              <Button variant="orange">
                Sign Up Now
              </Button>
            </div>

            <div></div>
            <div></div>
        </section>
    );
}
