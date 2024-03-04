import Image from "next/image";
import Hero1 from "@/assets/Hero-1.png";
import Hero2 from "@/assets/Hero-2.png";
import Hero3 from "@/assets/Hero-3.png";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { PiPackageBold } from "react-icons/pi";

export default function Hero() {
  return (
    <section>
      <div className="max-w-screen-xl container mx-auto mt-4">
        {/* Hero Banner */}
        <div className="grid grid-cols-6 grid-rows-2 gap-6">
          <div className="bg-blue-500 col-span-4 row-span-2 rounded-lg overflow-hidden">
            <Link href="/" className="block relative h-full w-full">
              <Image
                src={Hero1}
                alt="Banner Hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute text-white z-50 inset-0 pl-16 flex flex-col justify-center gap-7">
                <h1 className="font-semibold text-5xl">
                  Fresh & Healthy <br />
                  Organic Food
                </h1>
                <div className="border-l-2 border-primary pl-3">
                  <p className="text-xl font-medium mb-2">
                    Sale up to{" "}
                    <span className="py-1 px-3 rounded-md bg-warning">
                      30% OFF
                    </span>
                  </p>
                  <p>Free shipping on all your order.</p>
                </div>
                <button className="self-start py-4 px-10 rounded-full flex items-center gap-3 font-semibold bg-white text-primary">
                  Shop Now
                  <IoArrowForward
                    size={20}
                    className="text-primary font-semibold"
                  />
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-green-300 col-span-2 row-span-1 rounded-lg overflow-hidden">
            <Link href="/" className="block relative h-full w-full">
              <Image
                src={Hero2}
                alt="Banner Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 p-8">
                <p className="uppercase text-sm font-medium mb-2">
                  Summer Sale
                </p>
                <p className="uppercase text-4xl font-semibold mb-3">75% OFF</p>
                <p className="capitalize text-sm font-normal mb-6 text-gray-600">
                  Only Fruit & Vegetable
                </p>
                <button className="flex items-center gap-3 font-semibold text-primary hover:underline">
                  Shop Now
                  <IoArrowForward
                    size={20}
                    className="text-primary font-semibold"
                  />
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-black col-span-2 row-span-1 rounded-lg overflow-hidden">
            <Link href="/" className="block relative h-full w-full">
              <Image
                src={Hero3}
                alt="Banner Hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-white uppercase mb-3">Best Deal</p>
                <p className="text-4xl text-white capitalize mb-8 text-center font-semibold">
                  Sepecial Products Deal of The Month
                </p>
                <button className="flex items-center gap-3 font-semibold text-primary hover:underline">
                  Shop Now
                  <IoArrowForward
                    size={20}
                    className="text-primary font-semibold"
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Feature */}
        <div className="grid grid-cols-4 p-10 rounded-lg shadow-xl">
          <div className="flex items-center gap-4">
            <TbTruckDelivery size={40} className="text-primary" />
            <div>
              <p className="text-base font-medium mb-2">Free Shipping</p>
              <p className="text-sm font-normal text-gray-400">
                Free shipping o all your order
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TfiHeadphoneAlt size={40} className="text-primary" />
            <div>
              <p className="text-base font-medium mb-2">
                Customer Support 24/7
              </p>
              <p className="text-sm font-normal text-gray-400">
                Instant access to Support
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RiSecurePaymentLine size={40} className="text-primary" />
            <div>
              <p className="text-base font-medium mb-2">100% Secure Payment</p>
              <p className="text-sm font-normal text-gray-400">
                We ensure your money is save
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PiPackageBold size={40} className="text-primary" />
            <div>
              <p className="text-base font-medium mb-2">Money-Back Guarantee</p>
              <p className="text-sm font-normal text-gray-400">
                30 Days Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
